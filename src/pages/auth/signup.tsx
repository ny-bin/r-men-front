import React from 'react';
import { VFC } from 'react';

import { Layout } from '../../components/Commons/Layout';
import { Register } from '../../components/Uncommons/Register';

const SignUp: VFC = () => {
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
