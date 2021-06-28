import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { addApolloState, initializeApollo } from '../../apollo/apolloClient';
import {
  GetPrefecturesQuery,
  useGetPrefecturesQuery,
} from '../../apollo/graphql';
import { GET_PREFECTURES } from '../../apollo/queries/prefectureQueries';

export const AreaPrefecture: VFC = () => {
  const { data, error } = useGetPrefecturesQuery();

  const Tohoku = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '4'
  );
  const Kanto = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '5'
  );
  const Chubu = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '6'
  );
  const Kansai = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '7'
  );
  const ChuShikoku = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '8'
  );
  const Kyushu = data?.prefectures.filter(
    (prefecture) => (prefecture.area?.id.toString() as String) == '9'
  );
  const prefectureList = [Tohoku, Kanto, Chubu, Kansai, ChuShikoku, Kyushu];

  if (error) {
    <div>error: {console.log(error.message)}</div>;
  }
  return (
    <div className="container mx-auto pb-10">
      <h1 className="mx-auto text-4xl text-center font-serif">
        エリアから探す
      </h1>
      <div className="mx-auto grid grid-cols-2 place-content-center m-4">
        {prefectureList.map((area) => {
          if (area) {
            return (
              <div
                className="rounded-lg border-solid border-2 border-yellow-200 m-4"
                key={area[0].area?.id}
              >
                <h1 className="text-center text-2xl font-serif py-4 ">
                  {area[0].area?.name}
                </h1>
                <div className="grid grid-cols-4">
                  {area?.map((prefecture) => {
                    return (
                      <p className="text-center py-2" key={prefecture.id}>
                        {prefecture.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return <div>error:都道府県取得エラー</div>;
          }
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<GetPrefecturesQuery>({
    query: GET_PREFECTURES,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};
