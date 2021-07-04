import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  gql,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

admin.initializeApp();

// firebaseにuser作成時、hasuraにもユーザーを作成
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
  const custonClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.uid,
    },
  };

  try {
    await admin.auth().setCustomUserClaims(user.uid, custonClaims);

    await client.mutate({
      variables: {
        id: user.uid,
        name: user.displayName,
      },
      mutation: gql`
        mutation createUser($id: String!, $name: String!) {
          insert_users_one(object: { id: $id, name: $name }) {
            id
            name
            created_at
          }
        }
      `,
    });

    //初回ログインのユーザー作成とカスタムクレームの追加には遅延があるのでrefreshタイムの設定をする
    await admin.firestore().collection('user-meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.log(e);
  }
});
