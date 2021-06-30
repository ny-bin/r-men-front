import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//FireBaseが初期化されていたら既存のデータを渡す
!firebase.apps.length
  ? firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
      authDomain: process.env.NEXT_PUBLIC_FIRE_BASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIRE_BASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIRE_BASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    })
  : firebase.app();

export default firebase;
