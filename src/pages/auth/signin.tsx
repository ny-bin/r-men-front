import React from 'react';
import { VFC } from 'react';

import Link from 'next/link';

import { Layout } from '../../components/Commons/Layout';
import { Auth } from '../../components/Uncommons/Auth';

const SignUp: VFC = () => {
  return (
    <Layout title="signin">
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        ログイン
      </h1>
      <Auth isLogin={true}></Auth>
      <div className="h-100">test</div>
    </Layout>
  );
};

export default SignUp;
