import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
// const cors = require('cors');

admin.initializeApp();

const httpLink = createHttpLink({
  uri: functions.config().hasura.url,
  fetch: fetch as any,
});
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': functions.config().hasura.admin_secret,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  // Hasuraの検証用のカスタムクレーム（属性情報）
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.uid,
    },
  };

  try {
    // カスタムクレームの設定
    await admin.auth().setCustomUserClaims(user.uid, customClaims);

    // Hasuraサーバーへのユーザーデータの作成リクエスト
    await client.mutate({
      variables: { id: user.uid, name: user.displayName || 'unknown' },
      mutation: gql`
        mutation InsertUsers($name: String) {
          insert_users(objects: { name: $name }) {
            returning {
              id
              name
              prefecture_id
            }
          }
        }
      `,
    });

    // 初回ログインの際にユーザー作成と、カスタムクレームの設定には遅延があるため、
    // tokenリフレッシュのフック用にFirestoreへのmetaデータ追加を行う
    await admin.firestore().collection('user_meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.log(e);
  }
});
