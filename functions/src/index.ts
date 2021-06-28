import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

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

    await admin.firestore().collection('user-meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.log(e);
  }
});
