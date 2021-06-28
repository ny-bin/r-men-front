import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { concatPagination } from '@apollo/client/utilities';
import type { AppProps } from 'next/app';
import { auth } from '../utils/auth/firebase';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createHttpLink({ uri: process.env.HASURA_URL });
const authLink = setContext(async (_, { headers }) => {
  let token = '';
  // 匿名ログインでない、かつidTokenが存在すればidTokenを設定
  if (!auth.currentUser?.isAnonymous && auth.currentUser) {
    token = await auth.currentUser.getIdToken();
  }
  return token
    ? {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    : { headers };
});

// const requestAccessToken = async () => {
//   if (accessToken) return;

//   const res = await fetch(`${process.env.APP_HOST}/api/session`);
//   if (res.ok) {
//     const json = await res.json();
//     accessToken = json.accessToken;
//   } else {
//     accessToken = 'public';
//   }
// };

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://r-men.hasura.app/v1//graphql', // Server URL (must be absolute)
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
      },
    }),
    cache: new InMemoryCache(),
    // {
    //   typePolicies: {
    //     Query: {
    //       fields: {
    //         allPosts: concatPagination(),
    //       },
    //     },
    //   },
    // }
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
