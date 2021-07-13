import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apolloClient';
import { useUserChanged } from 'src/hooks/useUserChanged';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const {} = useUserChanged();
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default MyApp;
