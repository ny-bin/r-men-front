import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { VFC } from 'react';

import {
  GetAreasJoinPrefecturesQuery,
  GetCategoriesQuery,
  useGetAreasJoinPrefecturesQuery,
  useGetAreasQuery,
  useGetCategoriesQuery,
} from '../apollo/graphql';
import { addApolloState, initializeApollo } from '../apollo/apolloClient';
import { GET_CATEGORIES } from '../apollo/queries/categoryQueries';

import { Footer } from '../components/Commons/Footer';
import { AreaPrefecture } from '../components/Uncommons/AreaPrefecture';
import { GET_AREAS_JOIN_PREFECTURES } from 'src/apollo/queries/areaQueries';
import { ApolloQueryResult } from '@apollo/client';

type Props = {
  categories: ApolloQueryResult<GetCategoriesQuery>;
  areas: ApolloQueryResult<GetAreasJoinPrefecturesQuery>;
};

const Home: NextPage<Props> = (props: Props) => {
  // const categories = useGetCategoriesQuery();
  const categories = props.categories;
  const categoryNameList = categories.data;
  const categoryError = categories.error;

  const areas = props.areas;

  if (categoryError) {
    return <div>categoryError:{categoryError.message}</div>;
  }
  return (
    <>
      <Head>
        <title>R-MEN</title>
        <meta
          name="description"
          content="ラーメン専門の検索アプリです。各地域、カテゴリ、ランキング等で絞り込むことができます。"
        />
      </Head>
      <main className="bg-yellow-100 h-auto">
        <div className="bg-r-men-img w-full object-contain bg-contain xl:bg-cover pb-14">
          <div className="md:w-1/3 z-10 h-64">
            <div className="grid grid-cols-3 place-content-center h-16 py-5">
              <Link href="/auth/signin">
                <a className="text-gray-700 text-center px-4 py-2 m-2 font-medium">
                  Login
                </a>
              </Link>
              <Link href="/auth/signup">
                <a className="text-gray-700 text-center px-4 py-2 m-2 font-medium">
                  Sign Up
                </a>
              </Link>
              <Link href="/">
                <a className="text-gray-700 text-center px-4 py-2 m-2 font-medium">
                  Guest
                </a>
              </Link>
            </div>

            <div className="pt-2">
              <p className="text-5xl text-red-400 font-serif text-center">
                R-MEN
              </p>
              <p className="text-2xl font-bold text-black-400 font-serif text-center py-4">
                find your best r-men
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-10">
          <h1 className="mx-auto text-4xl text-center font-serif ">
            おすすめから探す
          </h1>
          <div className="grid grid-cols-2 place-content-center h-16 py-5 my-5">
            <p className="text-center mb-5">各エリアランキングTOP20</p>
            <p className="text-center mb-5">ユーザーおすすめ一覧</p>
            <p className="text-center">SNSで話題のラーメン</p>
            <p className="text-center">運営おすすめ</p>
          </div>
        </div>
        <div className="container mx-auto pb-10">
          <h1 className="mx-auto text-4xl text-center font-serif">
            カテゴリから探す
          </h1>
          <div className="grid grid-cols-6 h-auto py-5 my-5 w-2/3 mx-auto">
            {categoryNameList?.categories?.map((category) => {
              return (
                <p className="text-center py-2" key={category.id}>
                  {category.name}
                </p>
              );
            })}
          </div>
        </div>

        <AreaPrefecture data={areas.data} error={areas.error} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const categories = await apolloClient.query<GetCategoriesQuery>({
    query: GET_CATEGORIES,
  });

  const areas = await apolloClient.query<GetAreasJoinPrefecturesQuery>({
    query: GET_AREAS_JOIN_PREFECTURES,
  });

  return addApolloState(apolloClient, {
    props: { categories: categories, areas: areas },
    revalidate: false,
  });
};

export default Home;
