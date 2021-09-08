import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { loginUserVar } from 'src/apollo/cache';

import { Layout } from 'src/components/Layout/Layout';
import { Register } from './Register';
import type { CustomNextPage } from 'next';

const SignUp: CustomNextPage = () => {
  const loginUser = useReactiveVar(loginUserVar);
  const router = useRouter();

  if (loginUser) {
    router.push(`../user/${loginUser.id}`);
  }

  return (
    <>
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        新規会員登録
      </h1>
      <Register></Register>
    </>
  );
};

SignUp.getLayout = Layout;
export default SignUp;
