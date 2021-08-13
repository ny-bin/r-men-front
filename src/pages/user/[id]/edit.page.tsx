import { useQuery, ApolloQueryResult, useReactiveVar } from '@apollo/client';
import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import type { NextPage } from 'next';

import { addApolloState, initializeApollo } from '../../../apollo/apolloClient';
import { GetUserDetailByIdQuery, GetUsersQuery } from '../../../apollo/graphql';
import {
  GET_USERS,
  GET_USER_DETAIL_BY_ID,
} from '../../../apollo/queries/userQueries';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout/Layout';

import Image from 'next/image';
import { loginUserVar } from 'src/apollo/cache';

const Edit: NextPage = () => {
  //URLパスからidの取得
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);

  const { id } = router.query;

  //idからユーザー情報の取得(queryはキャッシュから使用)
  const {
    data,
  }: {
    data: GetUserDetailByIdQuery | undefined;
  } = useQuery(GET_USER_DETAIL_BY_ID, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true,
  });

  if (data?.users_by_pk?.id != loginUser?.id) {
    return (
      <Layout title="none-user">
        <div>自分以外のユーザーの編集ページには遷移できません</div>
      </Layout>
    );
  }

  // if (!data?.users_by_pk) {
  //   return (
  //     <Layout title="none-user">
  //       <div>該当のユーザーは存在しません</div>
  //     </Layout>
  //   );
  // }

  return (
    <Layout title="user-page">
      <div className="pt-20 py-5 text-center text-white mx-auto">
        <ul className="md:w-1/2 mx-auto">
          <li className="flex items-center justify-center">
            <Image
              src={'/' + data?.users_by_pk?.img_url ?? '/noimage.jpg'}
              width={200}
              height={200}
              alt="user's image of this page"
              className="rounded-full"
            />
          </li>

          <li className=" text-2xl font-italic text-center text-black">
            {data?.users_by_pk?.name}
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ..."></div>
        <div className="col-start-1 col-end-3 ..."></div>
        <div className="col-end-7 col-span-2 ..."></div>
        <div className="col-start-1 col-end-7 ..."></div>
      </div>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 grid md:grid-cols-3">
        <div className="py-8">
          <p>評価したお店数:</p>
          <p>フォロー:</p>
          <p> フォロワー: </p>
          <p> r-men通ランキング: </p>
        </div>

        <div className="col-span-2 py-8">
          {data?.users_by_pk?.self_pr ?? 'prはまだありません'}
        </div>
      </div>
      <div className="container mx-auto py-10">
        <h1 className="mx-auto text-3xl text-center font-serif font-light">
          コメント一覧
        </h1>
      </div>
      )
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetUsersQuery>({
    query: GET_USERS,
  });
  const paths = data.users.map((user) => {
    return { params: { id: user.id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetUserDetailByIdQuery>({
    query: GET_USER_DETAIL_BY_ID,
    variables: { id: params?.id ?? '' },
  });

  return addApolloState(apolloClient, {
    props: { user: data },
    revalidate: 60 * 60,
  });
};

export default Edit;
