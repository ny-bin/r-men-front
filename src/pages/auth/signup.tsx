import React from 'react';
import { VFC } from 'react';

import { Layout } from '../../components/Commons/Layout';
import { Auth } from '../../components/Uncommons/Auth';

const SignUp: VFC = () => {
  return (
    <Layout title="Home">
      <Auth />
    </Layout>
  );
};

export default SignUp;
