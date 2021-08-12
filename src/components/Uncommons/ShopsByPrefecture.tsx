import React, { VFC } from 'react';
import { GetShopsByPrefectureQuery } from '../../apollo/graphql';

type Props = {
  data: GetShopsByPrefectureQuery | undefined;
  onLoadMore: (e: any) => void;
};

export const ShopsByPrefecture: VFC<Props> = (props) => {
  const data = props.data;
  return (
    <div>
      {data &&
        data?.shops?.map((shop) => {
          return (
            <div
              className="bg-white sm:w-1/3 w-2/3 h-auto mb-4 mx-auto"
              key={shop.id}
            >
              <div className="w-full max-w-2xlbg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:grid md:grid-cols-6">
                <div className="col-span-2"></div>

                <div className="col-span-4 py-8">{shop.name}</div>
              </div>
            </div>
          );
        })}
      <div className=""></div>
      <div className="bg-white sm:w-1/3 w-2/3 h-auto mb-4 mx-auto">
        <div className="w-full max-w-2xlbg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:grid md:grid-cols-6">
          <div className="col-span-2"></div>
          <button onClick={props.onLoadMore}>進む</button>
        </div>
      </div>
    </div>
  );
};
