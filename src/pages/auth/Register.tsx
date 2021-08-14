import { ChangeEvent, FormEvent, useCallback, useState, VFC } from 'react';
import React from 'react';
import Link from 'next/link';
import firebase from '../../../firebaseConfig';
import { useRouter } from 'next/router';
import { useReactiveVar, gql } from '@apollo/client';
import { LoginUser, loginUserVar } from 'src/apollo/cache';
import { initializeApollo } from 'src/apollo/apolloClient';
import { GetUserByIdQuery } from 'src/apollo/graphql';
import { GET_USER_BY_ID } from 'src/apollo/queries/userQueries';
import { useQuery } from '@apollo/client';

export const Register: VFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const pwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const nameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const pwConfChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConf(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);

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

  return (
    <>
      <div className="w-full max-w-sm mx-auto">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              UserName<span className="text-red-600">(必須)</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="userName"
              type="UserName"
              value={userName}
              onChange={nameChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email<span className="text-red-600">(必須)</span>
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
              Password<span className="text-red-600">(必須)</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password"
              type="password"
              value={password}
              onChange={pwChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password(確認)<span className="text-red-600">(必須)</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password"
              type="password"
              value={passwordConf}
              onChange={pwConfChange}
            />
          </div>
          <div className="text-center pt-3">
            <button
              disabled={!email || !password}
              type="submit"
              className="disabled:opacity-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/signin">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-auto ">
              アカウントをお持ちの方はこちら
            </a>
          </Link>
        </div>

        <div>
          <button onClick={handleGoogleAuth}>Googleで認証する</button>
        </div>
      </div>
    </>
  );
};
