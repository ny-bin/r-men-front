import { useQuery, ApolloQueryResult, useReactiveVar } from '@apollo/client';
import { GetStaticProps } from 'next';
import React, { useEffect, useState, VFC } from 'react';
import { addApolloState, initializeApollo } from '../../../apollo/apolloClient';
import {
  GetPrefecturesIdFirst5Query,
  GetPrefecturesQuery,
  GetShopsByPrefectureQuery,
  useGetShopsByPrefectureQuery,
} from '../../../apollo/graphql';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Commons/Layout';
import { loginUserVar } from 'src/apollo/cache';
import { GET_SHOPS_BY_PREFECTURE } from 'src/apollo/queries/shopQueries';
import { GET_PREFECTURES_ID_FIRST5 } from 'src/apollo/queries/prefectureQueries';
import { NetworkStatus } from '@apollo/client';

const Shop: VFC = () => {
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);

  //URLパスからidの取得
  const { id } = router.query;
  let prefecture_id = 0;
  if (id && typeof id == 'object') {
    prefecture_id = parseInt(id[0]);
  } else if (id && typeof id == 'string') {
    prefecture_id = parseInt(id);
  }

  const [offset, setOffset] = useState(10);
  const [shopsData, setShopsData] = useState<GetShopsByPrefectureQuery>();

  const { data, loading, fetchMore, networkStatus, error } = useQuery(
    GET_SHOPS_BY_PREFECTURE,
    {
      variables: {
        prefecture_id: { _eq: prefecture_id },
        offset: 0,
        limit: 10,
      },
      notifyOnNetworkStatusChange: true,
      onCompleted: setShopsData,
    }
  );
  if (networkStatus === NetworkStatus.refetch) return <>Refetching!</>;
  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  // useEffect(() => {
  //   setShops((prev) => {
  //     let getShops: GetShopsByPrefectureQuery['shops'] = [];
  //     if (data) {
  //       getShops = data?.shops;
  //     }
  //     return [...prev, ...getShops];
  //   });
  // }, []);

  // const handleMoreFetch = async () => {
  //   let { data, loading, error } = await fetchMore({
  //     variables: {
  //       offset: offset,
  //       limit: 10,
  //     },
  //   });

  //   setOffset((num) => {
  //     return num + 10;
  //   });

  //   if (!loading) {
  //     setShops((prev) => {
  //       let getShops: GetShopsByPrefectureQuery['shops'] = [];
  //       getShops = data.shops;
  //       return [...getShops];
  //     });
  //   }
  // };

  // const handleBack = async () => {
  //   console.log('data get start');
  //   let fetchMoredata = await fetchMore({
  //     variables: {
  //       offset: offset,
  //       limit: 10,
  //     },
  //   });

  //   setOffset((num) => {
  //     return num - 10;
  //   });

  //   setShops(fetchMoredata.data.shops);
  //   if (fetchMoredata.data.shops) {
  //     setShops(fetchMoredata.data.shops);
  //   }
  // };

  //idから店舗情報の取得(queryはキャッシュから使用)

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
        {shopsData?.shops?.map((shop) => {
          return <p key={shop.id}>{shop.name}</p>;
        })}
      </div>
      {/* <button onClick={handleMoreFetch}>進む</button>
        <button onClick={handleBack}>戻る</button> */}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetPrefecturesIdFirst5Query>({
    query: GET_PREFECTURES_ID_FIRST5,
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
  console.log(params);

  const { data } = await apolloClient.query<GetShopsByPrefectureQuery>({
    query: GET_SHOPS_BY_PREFECTURE,
    variables: { prefecture_id: { _eq: params?.id ?? '' } },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return addApolloState(apolloClient, {
    props: { shop: data },
    revalidate: 60,
  });
};

export default Shop;
