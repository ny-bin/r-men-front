import React, { VFC } from 'react';

export const Header: VFC = () => {
  return (
    <header className="bg-yellow-400 h-16">
      <div className="float-left w-1/2 text-2xl pl-12 text-red-400 h-full flex content-center flex-wrap">
        <p className="text-left font-bold">R-MEN</p>
      </div>
    </header>
  );
};
