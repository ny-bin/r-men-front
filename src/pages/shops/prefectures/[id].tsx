import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { NetworkStatus } from '@apollo/client';
import { useQuery, useReactiveVar } from '@apollo/client';

import { addApolloState, initializeApollo } from 'src/apollo/apolloClient';
import { Layout } from 'src/components/Commons/Layout';
import { loginUserVar } from 'src/apollo/cache';
import {
  GetPrefecturesIdFirst5Query,
  GetShopsByPrefectureQuery,
} from 'src/apollo/graphql';
import { GET_SHOPS_BY_PREFECTURE } from 'src/apollo/queries/shopQueries';
import { GET_PREFECTURES_ID_FIRST5 } from 'src/apollo/queries/prefectureQueries';

const Shop: NextPage = () => {
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

  const { data, loading, fetchMore, networkStatus, error } =
    useQuery<GetShopsByPrefectureQuery>(GET_SHOPS_BY_PREFECTURE, {
      variables: {
        _eq: prefecture_id,
        offset: 0,
        limit: 3,
      },
      notifyOnNetworkStatusChange: true,
    });

  if (networkStatus === NetworkStatus.refetch) return <>Refetching!</>;
  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  const handleMoreFetch = async () => {
    setOffset((offset) => {
      return offset + 10;
    });

    await fetchMore({
      variables: {
        _eq: prefecture_id,
        offset: offset,
        limit: 10,
      },
    });
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
      <div className="pt-4 ">
        {data &&
          data?.shops?.map((shop) => {
            return (
              <div
                className="bg-white sm:w-1/3 w-2/3 h-auto mb-4 mx-auto"
                key={shop.id}
              >
                <div className="w-full max-w-2xlbg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:grid md:grid-cols-6">
                  <div className="col-span-2">
                    <Image
                      src={'/adpDSC_1749.jpg'}
                      width={100}
                      height={100}
                      alt="user's image of this page"
                    />
                  </div>

                  <div className="col-span-4 py-8">{shop.name}</div>
                </div>
              </div>
            );
          })}
      </div>

      <div className=""></div>
      <div className="bg-white sm:w-1/3 w-2/3 h-auto mb-4 mx-auto">
        <div className="w-full max-w-2xlbg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:grid md:grid-cols-6">
          <div className="col-span-2"></div>
          <button onClick={handleMoreFetch}>進む</button>
        </div>
      </div>
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

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
};

export default Shop;
