import { VFC } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLoginAndRegister } from 'src/hooks/useAuth';

export const Register: VFC = () => {
  const {
    handleGoogleAuth,
    handleRegister,
    pwChange,
    emailChange,
    email,
    password,
  } = useLoginAndRegister();

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
                Googleアカウントで登録
              </p>
            </div>
          </div>
        </button>

        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
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
      </div>
    </>
  );
};
