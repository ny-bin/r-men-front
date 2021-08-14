import { ChangeEvent, FormEvent, useCallback, useState, VFC } from 'react';
import firebase from '../../firebaseConfig';
import { initializeApollo } from 'src/apollo/apolloClient';
import { GetUserByIdQuery } from 'src/apollo/graphql';
import { GET_USER_BY_ID } from 'src/apollo/queries/userQueries';
import { loginUserVar } from 'src/apollo/cache';
import router from 'next/router';

export const useLoginAndRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const pwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ログイン処理
    let userId: string | undefined = '';
    //新規登録処理
    try {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (credential) => {
              //登録後に編集ページへ遷移させる
              const user = credential.user;
              //ユーザー情報の反映に少しラグがあるので時間をあける

              if (user) {
                const client = initializeApollo();
                await client
                  .query<GetUserByIdQuery>({
                    query: GET_USER_BY_ID,
                    variables: {
                      id: user.uid,
                    },
                  })
                  .then(async (result) => {
                    if (result.data.users_by_pk) {
                      loginUserVar(result.data.users_by_pk);
                      resetInput();
                    }
                  });
                router.push(`../user/${user.uid}`);
              }
              //mutation入れてユーザーの名前を書き換える？
              // router.push(`/user/${userId}/edit`);
            });
        });
    } catch (e) {
      alert(e.message);
    }
  };

  const handleGoogleAuth = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const client = initializeApollo();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(async (credential) => {
            //登録後に編集ページへ遷移させる
            const user = credential.user;
            if (user) {
              await client
                .query<GetUserByIdQuery>({
                  query: GET_USER_BY_ID,
                  variables: {
                    id: user.uid,
                  },
                })
                .then((result) => {
                  loginUserVar(result.data.users_by_pk);
                });
              router.push(`../user/${user.uid}`);
            }
          });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const LoginAction = async (credential: firebase.auth.UserCredential) => {
    const client = initializeApollo();
    const user = credential.user;
    if (user) {
      const { data } = await client.query<GetUserByIdQuery>({
        query: GET_USER_BY_ID,
        variables: {
          id: user.uid,
        },
      });
      loginUserVar(data.users_by_pk);
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ログイン処理
    try {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((credential) => {
              //user情報の保存
              LoginAction(credential);
              router.push(`../user/${credential.user?.uid}`);
            });
        });
    } catch (e) {
      alert(e.message);
    }
    resetInput();
  };

  return {
    handleGoogleAuth,
    handleRegister,
    handleLogin,
    emailChange,
    pwChange,
    email,
    password,
  };
};
