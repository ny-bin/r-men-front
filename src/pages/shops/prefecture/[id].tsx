import { useQuery, ApolloQueryResult, useReactiveVar } from '@apollo/client';
import { GetStaticProps } from 'next';
import React, { useEffect, VFC } from 'react';
import { addApolloState, initializeApollo } from '../../../apollo/apolloClient';
import {
  GetPrefecturesByIdQuery,
  GetShopsByPrefectureQuery,
} from '../../../apollo/graphql';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Commons/Layout';
import { loginUserVar } from 'src/apollo/cache';
import { GET_SHOPS_BY_PREFECTURE } from 'src/apollo/queries/shopQueries';
import {
  GET_PREFECTURES,
  GET_PREFECTURES_BY_ID,
} from 'src/apollo/queries/prefectureQueries';
import queryString from 'query-string';

const Shop: VFC = () => {
  //URLパスからidの取得
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);
  const { id } = router.query;
  let prefecture_id = 0;
  if (id && typeof id == 'object') {
    prefecture_id = parseInt(id[0]);
  } else if (id && typeof id == 'string') {
    prefecture_id = parseInt(id);
  }

  //idから店舗情報の取得(queryはキャッシュから使用)
  const {
    data,
  }: {
    data: GetShopsByPrefectureQuery | undefined;
  } = useQuery(GET_SHOPS_BY_PREFECTURE, {
    variables: { prefecture_id: { _eq: prefecture_id } },
    notifyOnNetworkStatusChange: true,
  });

  // if (!loginUser) {
  //   return (
  //     <Layout title="shop-page">
  //       <div>このページはログインしたユーザーのみ観覧できます</div>
  //     </Layout>
  //   );
  // }

  return (
    <Layout title="shop-page">
      <div>
        {data?.shops?.map((shop) => {
          return <p key={shop.id}>{shop.name}</p>;
        })}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetPrefecturesByIdQuery>({
    query: GET_PREFECTURES_BY_ID,
  });
  const paths = data.prefectures.map((prefecture) => {
    return { params: { id: prefecture.id.toString() } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetShopsByPrefectureQuery>({
    query: GET_SHOPS_BY_PREFECTURE,
    variables: { prefecture_id: { _eq: params?.id ?? '' } },
  });

  return addApolloState(apolloClient, {
    props: { shop: data },
    revalidate: 60 * 60,
  });
};

export default Shop;
