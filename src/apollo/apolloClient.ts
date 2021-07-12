import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { AppProps } from 'next/app';
import Cookies from 'universal-cookie';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink = createHttpLink({
  uri: 'https://r-men.hasura.app/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  const cookie = new Cookies();
  const token = cookie.get('token');

  return token
    ? { headers: { ...headers, authorization: `Bearer ${token}` } }
    : { headers };
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       allPosts: concatPagination(),
      //     },
      //   },
      // },
    }),
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  //   if (initialState) {
  //     // Get existing cache, loaded during client side data fetching
  //     const existingCache = _apolloClient.extract();

  //     // Merge the existing cache into data passed from getStaticProps/getServerSideProps
  //     const data = merge(initialState, existingCache, {
  //       // combine arrays using object equality (like in sets)
  //       arrayMerge: (destinationArray, sourceArray) => [
  //         ...sourceArray,
  //         ...destinationArray.filter((d) =>
  //           sourceArray.every((s) => !isEqual(d, s))
  //         ),
  //       ],
  //     });

  //     // Restore the cache with the merged data
  //     _apolloClient.cache.restore(data);
  //   }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};

// _app.tsxで使用。clientをメモ化しておく
export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => {
    return initializeApollo(state);
  }, [state]);
  return store;
};
