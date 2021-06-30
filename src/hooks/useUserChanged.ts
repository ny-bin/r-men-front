import { useEffect } from 'react';
import firebase from '../../firebaseConfig';
import { useRouter } from 'next/router';
import Cookie from 'universal-cookie';

export let unSubMeta: () => void;

export const useUserChanged = () => {
  const cookie = new Cookie();
  const router = useRouter();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
  //userが変更した場合に走る処理
  useEffect(() => {
    const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        //userのIdを取得
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (hasuraClaims) {
          cookie.set('token', token, { path: '/' });
          router.push('/task');
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
              cookie.set('token', tokenSnap, { path: '/' });
              router.push('/task');
            }
          });
        }
      }
    });

    return () => {
      unSubUser();
    };
  }, []);

  return {};
};
