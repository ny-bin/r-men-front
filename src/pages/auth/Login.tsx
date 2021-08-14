import { ChangeEvent, FormEvent, useCallback, useState, VFC } from 'react';
import React from 'react';
import Link from 'next/link';
import firebase from '../../../firebaseConfig';
import { useLogout } from '../../hooks/useLogout';
import { initializeApollo } from 'src/apollo/apolloClient';
import { GetUserByIdQuery } from 'src/apollo/graphql';
import { GET_USER_BY_ID } from 'src/apollo/queries/userQueries';
import { loginUserVar } from 'src/apollo/cache';
import router from 'next/router';
import Image from 'next/image';

const handleGoogleAuth = () => {
  const client = initializeApollo();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
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

export const Login: VFC = () => {
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

  const user = firebase.auth().currentUser;
  const { logout } = useLogout();

  return (
    <>
      <div className="w-full max-w-sm mx-auto">
        <button className="mx-auto w-full" onClick={handleGoogleAuth}>
          <div className="bg-yellow shadow-md rounded-lg px-4 pt-3 pb-3 mb-4">
            <div className="flex space-x-4 items-center justify-center py-3 pl-4">
              <Image
                src="/Google__G__Logo.svg"
                width={30}
                height={30}
                alt="google image"
              />
              <p className="text-sm font-bold text-center">
                Googleアカウントでログイン
              </p>
            </div>
          </div>
        </button>
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email"
              type="text"
              value={email}
              onChange={emailChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password"
              type="password"
              value={password}
              onChange={pwChange}
            />
          </div>

          <div className="text-center pt-3">
            <button
              disabled={!email || !password}
              type="submit"
              className="disabled:opacity-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/signup">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-auto ">
              アカウントをお持ちでない方はこちら
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
