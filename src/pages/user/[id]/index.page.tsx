import { useQuery, useReactiveVar } from '@apollo/client';
import { GetStaticProps } from 'next';
import React from 'react';
import type { CustomNextPage } from 'next';

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
import { useLogout } from 'src/hooks/useLogout';
import Head from 'next/head';
import Shop from 'src/pages/shops/[id].page';

const UserPage: CustomNextPage = () => {
  //URLパスからidの取得
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);
  const { logout } = useLogout();

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
  console.log(data);

  if (!data?.users_by_pk) {
    return (
      <>
        <Head>
          <link rel="icon" href="test.jpg" />
          <title>No-User</title>
          <meta
            name="description"
            content="ラーメン専門の検索アプリです。各地域、カテゴリ、ランキング等で絞り込むことができます。"
          />
        </Head>
        <div>ユーザーは存在しません</div>
      </>
    );
  }

  // if (data?.users_by_pk?.id != loginUser?.id) {
  //   return (
  //     <>
  //       <Head>
  //         <link rel="icon" href="test.jpg" />
  //         <title>No-User</title>
  //         <meta
  //           name="description"
  //           content="ラーメン専門の検索アプリです。各地域、カテゴリ、ランキング等で絞り込むことができます。"
  //         />
  //       </Head>
  //       <div>自分以外のユーザーの編集ページには遷移できません</div>
  //     </>
  //   );
  // }
  return (
    <>
      <div className="pt-20 py-5 text-center text-white mx-auto">
        <ul className="md:w-1/2 mx-auto">
          <li className="flex items-center justify-center">
            <Image
              src={'/noimage.jpg'}
              width={200}
              height={200}
              alt="user's image of this page"
              className="rounded-full"
            />
          </li>

          <li className=" text-2xl font-italic text-center text-black">
            {data?.users_by_pk?.name}
          </li>

          <li>
            {/* bg-white shadow-md */}
            <div className="w-full max-w-2xl mx-auto rounded-lg px-8 pt-6 pb-8 mt-8">
              <p className="text-xm font-italic text-center text-black">
                {' '}
                {data?.users_by_pk?.self_pr ?? 'prはまだありません'}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 grid md:grid-cols-3">
        <div className="py-8">
          <p>評価したお店数:</p>
          <p> r-men通ランキング: </p>
        </div>
      </div> */}
      <div className="container mx-auto py-10">
        <h1 className="mx-auto text-3xl text-center font-serif font-light pb-4">
          コメント一覧
        </h1>

        <div className="bg-white w-2/3 h-auto mb-4 mx-auto">
          {data?.users_by_pk.shop_comments.map((comment) => {
            return (
              <div key={comment.shop.name}>
                <div className="w-full max-w-2xl rounded-lg px-8 pt-6 pb-8 mb-4 ">
                  {comment.shop.name} : {comment.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h1 className="mx-auto text-3xl text-center font-serif font-light pb-4">
          お気に入り店舗一覧
        </h1>

        <div className="bg-white w-2/3 h-auto mb-4 mx-auto">
          {data?.users_by_pk.likes.map((likeShop) => {
            return (
              <div key={likeShop.shop.name}>
                <div className="w-full max-w-2xl rounded-lg px-4 pt-2 pb-2 mb-2">
                  {likeShop.shop.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {loginUser && loginUser.id == data?.users_by_pk.id && (
        <div className="container">
          <button
            onClick={logout}
            className="px-auto disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"
          >
            logout
          </button>
        </div>
      )}
    </>
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

UserPage.getLayout = Layout;
export default UserPage;
