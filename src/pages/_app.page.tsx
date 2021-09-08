import '../styles/globals.css';
import type { CustomAppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apolloClient';
import { useEffect } from 'react';
import firebase from '../../firebaseConfig';
import Cookie from 'universal-cookie';
import { loginUserVar } from '../apollo/cache';
import { useReactiveVar } from '@apollo/client';
import {
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
} from 'src/apollo/graphql';
import { GET_USER_BY_ID } from 'src/apollo/queries/userQueries';

export let unSubMeta: () => void;

const MyApp = ({ Component, pageProps, router }: CustomAppProps) => {
  const cookie = new Cookie();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
  const loginUser = useReactiveVar(loginUserVar);
  const client = useApollo(pageProps);
  const user = firebase.auth().currentUser;

  //getLayoutの設定
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  // 全ページ共通で行う処理
  useEffect(() => {
    //非同期処理の定義
    const f = async () => {
      await client
        .query<GetUserByIdQuery, GetUserByIdQueryVariables>({
          query: GET_USER_BY_ID,
          variables: {
            id: user?.uid,
          },
          fetchPolicy: 'network-only',
        })
        .then((getUser) => {
          loginUserVar(getUser.data.users_by_pk);
        });
    };
    if (user && !loginUser) {
      console.log('Tokenあり + ユーザー情報なしのためfetch中');
      f();
    } else {
      console.log('認証情報あり');
    }
  }, [router.pathname]);

  //userの状態が変更した場合に走る処理
  useEffect(() => {
    const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // ログイン時はグローバルステートをセットするがログイン後にURLを直接更新するとリセットされるため呼んでおく
        if (loginUser === null) {
          await client
            .query<GetUserByIdQuery, GetUserByIdQueryVariables>({
              query: GET_USER_BY_ID,
              variables: {
                id: user.uid,
              },
            })
            .then((getUser) => {
              loginUserVar(getUser.data.users_by_pk);
            });
        }

        //userのIdを取得
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];

        if (hasuraClaims) {
          cookie.set('token', token, { path: '/' });
        } else {
          //ない場合はサブスクリプションでidが追加されるまで監視する
          const useRef = firebase
            .firestore()
            .collection('user_meta')
            .doc(user.uid);
          unSubMeta = useRef.onSnapshot(async () => {
            const tokenSnap = await user.getIdToken(true);
            const idTokenResultSnap = await user.getIdTokenResult();
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
            if (hasuraClaimsSnap) {
              cookie.set('token', tokenSnap, { path: '/', httpOnly: true });
            }
          });
        }
      }
    });

    return () => {
      unSubUser();
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
      {/* <Component {...pageProps} /> */}
    </ApolloProvider>
  );
};
export default MyApp;
