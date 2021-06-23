import React, { VFC } from 'react';

export const Footer: VFC = () => {
  return (
    <footer className="h-16">
      <div className="float-left w-1/2 text-2xl pl-12 text-red-400 h-full flex content-center flex-wrap">
        <p className="text-left">R-MEN</p>
      </div>
      <div className="float-right  w-1/2 grid md:grid-cols-4 grid-cols-2 h-full text-sm  flex content-center flex-wrap">
        <p className="text-center text-gray-500">About</p>
        <p className="text-center text-gray-500">利用規約</p>
        <p className="text-center text-gray-500">プライバシーポリシー</p>
        <p className="text-center text-gray-500">サイトマップ</p>
      </div>
    </footer>
  );
};
