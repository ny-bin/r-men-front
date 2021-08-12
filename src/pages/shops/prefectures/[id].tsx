import React, { useCallback, useState } from 'react';
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
import { ShopsByPrefecture } from 'src/components/Uncommons/ShopsByPrefecture';

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

  // const [offset, setOffset] = useState(10);
  const [limit, setLimit] = useState(0);
  const { data, loading, fetchMore, networkStatus, error } =
    useQuery<GetShopsByPrefectureQuery>(GET_SHOPS_BY_PREFECTURE, {
      variables: {
        _eq: prefecture_id,
        offset: limit,
        limit: 10,
      },
      // notifyOnNetworkStatusChange: true,
    });

  // if (networkStatus === NetworkStatus.refetch) return <>Refetching!</>;
  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  console.log(limit);
  // const handleMoreFetch = useCallback((e) => {
  //   const currentLength = limit;
  //   fetchMore({
  //     variables: {
  //       _eq: prefecture_id,
  //       offset: currentLength,
  //       limit: 10,
  //     },
  //   }).then((fetchMoreResult) => {
  //     // Update variables.limit for the original query to include
  //     // the newly added feed items.
  //     if (currentLength) {
  //       setLimit(currentLength + fetchMoreResult.data.shops.length);
  //     }
  //   });
  // }, []);

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
        <ShopsByPrefecture
          data={data}
          onLoadMore={() => {
            const currentLength = limit;
            // setLimit((limit) => {
            //   return limit + 10;
            // });
            fetchMore({
              variables: {
                offset: currentLength,
                limit: 10,
              },
            }).then((fetchMoreResult) => {
              // Update variables.limit for the original query to include
              // the newly added feed items.
              setLimit((limit) => {
                return limit + 10;
              });
            });
          }}
        />
      </div>
      {limit !== 0 && (
        <div className="bg-white sm:w-1/3 w-2/3 h-auto mb-4 mx-auto">
          <div className="w-full max-w-2xlbg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:grid md:grid-cols-6">
            <div className="col-span-2"></div>
            <button
              onClick={() => {
                setLimit((limit) => {
                  return limit - 10;
                });
              }}
            >
              戻る
            </button>
          </div>
        </div>
      )}
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
