import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo, useApollo } from '../apollo/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default MyApp;
