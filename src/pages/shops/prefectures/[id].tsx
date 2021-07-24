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
import {
  GET_PREFECTURES,
  GET_PREFECTURES_ID_FIRST5,
} from 'src/apollo/queries/prefectureQueries';

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
  const [shops, setShops] = useState<GetShopsByPrefectureQuery['shops']>([]);
  //idから店舗情報の取得(queryはキャッシュから使用)
  const { data, loading, fetchMore } = useGetShopsByPrefectureQuery({
    variables: {
      prefecture_id: { _eq: prefecture_id },
      offset: 0,
      limit: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    <>loading</>;
  }

  useEffect(() => {
    if (data) {
      setShops(data.shops);
    }
  }, []);

  const handleMoreFetch = async () => {
    console.log('data get start');
    let fetchMoredata = await fetchMore({
      variables: {
        offset: offset,
        limit: 10,
      },
    });

    setOffset((num) => {
      return num + 10;
    });

    setShops(fetchMoredata.data.shops);
    if (fetchMoredata.data.shops) {
      setShops(fetchMoredata.data.shops);
      console.log(fetchMoredata);
    }
  };

  const handleBack = async () => {
    console.log('data get start');
    let fetchMoredata = await fetchMore({
      variables: {
        offset: offset,
        limit: 10,
      },
    });

    setOffset((num) => {
      return num + 10;
    });

    setShops(fetchMoredata.data.shops);
    if (fetchMoredata.data.shops) {
      setShops(fetchMoredata.data.shops);
      console.log(fetchMoredata);
    }
  };

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
        {shops?.map((shop) => {
          return <p key={shop.id}>{shop.name}</p>;
        })}
      </div>
      <button onClick={handleMoreFetch}>進む</button>
      <button onClick={handleBack}>戻る</button>
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
    revalidate: 60 * 60,
  });
};

export default Shop;
