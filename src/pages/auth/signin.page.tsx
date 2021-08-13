import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { VFC } from 'react';
import { loginUserVar } from 'src/apollo/cache';
import type { NextPage } from 'next';

import { Layout } from 'src/components/Layout/Layout';

import { Login } from './Login';

const SignIn: NextPage = () => {
  const loginUser = useReactiveVar(loginUserVar);
  const router = useRouter();

  if (loginUser) {
    router.push(`../user/${loginUser.id}/edit`);
  }
  return (
    <Layout title="signin">
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        ログイン
      </h1>
      <Login></Login>
    </Layout>
  );
};

export default SignIn;
