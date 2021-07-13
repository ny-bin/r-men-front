import React from 'react';
import { VFC } from 'react';

import Link from 'next/link';

import { Layout } from '../../components/Commons/Layout';
import { Login } from '../../components/Uncommons/Login';

const SignIn: VFC = () => {
  return (
    <Layout title="signin">
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        ログイン
      </h1>
      <Login isLogin={true}></Login>
    </Layout>
  );
};

export default SignIn;
