import { useQuery, ApolloQueryResult, useReactiveVar } from '@apollo/client';
import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { addApolloState, initializeApollo } from '../../apollo/apolloClient';
import { GetShopsDetailByIdQuery, GetShopsQuery } from '../../apollo/graphql';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Commons/Layout';
import { loginUserVar } from 'src/apollo/cache';
import {
  GET_SHOPIDS,
  GET_SHOPS_DETAIL_BY_ID,
} from 'src/apollo/queries/shopQueries';

const Shop: VFC = () => {
  //URLパスからidの取得
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);

  const { id } = router.query;

  //idから店舗情報の取得(queryはキャッシュから使用)
  const {
    data,
  }: {
    data: GetShopsDetailByIdQuery | undefined;
  } = useQuery(GET_SHOPS_DETAIL_BY_ID, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true,
  });

  if (!loginUser) {
    return (
      <Layout title="shop-page">
        <div>このページはログインしたユーザーのみ観覧できます</div>
      </Layout>
    );
  }

  return (
    <Layout title="shop-page">
      <div>
        {data?.shops_by_pk?.name}
        {data?.shops_by_pk?.id}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetShopsQuery>({
    query: GET_SHOPIDS,
  });
  const paths = data.shops.map((shop) => {
    return { params: { id: shop.id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetShopsDetailByIdQuery>({
    query: GET_SHOPS_DETAIL_BY_ID,
    variables: { id: params?.id ?? '' },
  });

  return addApolloState(apolloClient, {
    props: { shop: data },
    revalidate: 60 * 60,
  });
};

export default Shop;
