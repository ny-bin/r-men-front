import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { addApolloState, initializeApollo } from '../../apollo/apolloClient';
import {
  GetAreasJoinPrefecturesQuery,
  useGetAreasJoinPrefecturesQuery,
} from '../../apollo/graphql';
import { GET_AREAS_JOIN_PREFECTURES } from '../../apollo/queries/areaQueries';

export const AreaPrefecture: VFC = () => {
  const { data, error } = useGetAreasJoinPrefecturesQuery();

  if (error) {
    <div>error: {console.log(error.message)}</div>;
  }
  return (
    <div className="container mx-auto pb-10">
      <h1 className="mx-auto text-4xl text-center font-serif">
        エリアから探す
      </h1>
      <div className="mx-auto grid grid-cols-2 place-content-center m-4">
        {data?.areas.map((area) => {
          if (area) {
            return (
              <div
                className="rounded-lg border-solid border-2 border-yellow-200 m-4"
                key={area.id}
              >
                <h1 className="text-center text-2xl font-serif py-4">
                  {area.name}
                </h1>
                <div className="grid grid-cols-4">
                  {area?.prefectures.map((prefecture) => {
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
            return <div key={10}>error:都道府県取得エラー</div>;
          }
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<GetAreasJoinPrefecturesQuery>({
    query: GET_AREAS_JOIN_PREFECTURES,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};
