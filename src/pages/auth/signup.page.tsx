import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { loginUserVar } from 'src/apollo/cache';

import { Layout } from 'src/components/Layout/Layout';
import { Register } from './Register';
import type { NextPage } from 'next';

const SignUp: NextPage = () => {
  const loginUser = useReactiveVar(loginUserVar);
  const router = useRouter();

  if (loginUser) {
    router.push(`../user/${loginUser.id}`);
  }

  return (
    <Layout title="Home">
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        新規会員登録
      </h1>
      <Register></Register>
    </Layout>
  );
};

export default SignUp;
