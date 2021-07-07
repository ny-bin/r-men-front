import { VFC } from 'react';
import React from 'react';
import Link from 'next/link';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import firebase from '../../../firebaseConfig';
import { useLogout } from '../../hooks/useLogout';

type Props = {
  isLogin: boolean;
};

export const Auth: VFC<Props> = (props: Props) => {
  const user = firebase.auth().currentUser;
  const {
    email,
    password,
    emailChange,
    pwChange,
    isLogin,
    authUser,
    userName,
    nameChange,
    passwordConf,
    pwConfChange,
  } = useFirebaseAuth(props.isLogin);

  const { logout } = useLogout();
  return (
    <>
      <div className="w-full max-w-sm mx-auto">
        <form
          onSubmit={authUser}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          {!isLogin && (
            <>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  UserName
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="userName"
                  type="UserName"
                  value={userName}
                  onChange={nameChange}
                />

                {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
              </div>
            </>
          )}

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

            {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
          </div>

          {!isLogin && (
            <>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password(確認)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="password"
                  type="password"
                  value={passwordConf}
                  onChange={pwConfChange}
                />
              </div>
            </>
          )}
          <div className="text-center pt-3">
            <button
              disabled={!email || !password}
              type="submit"
              className="disabled:opacity-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
          <div className="text-center">
            <Link href={isLogin ? '/auth/signup' : '/auth/signin'}>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-auto ">
                {isLogin
                  ? 'アカウントをお持ちでない方はこちら'
                  : 'アカウントをお持ちの方はこちら'}
              </a>
            </Link>
          </div>
        </form>
      </div>

      {user && (
        <>
          <Link href="/">
            <div className="flex items-center cursor-pointer my-3">
              <span>{user.displayName}</span>
              <span>{user.uid}</span>
            </div>
          </Link>
          <button
            onClick={logout}
            className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"
          >
            logout
          </button>
        </>
      )}
    </>
  );
};
