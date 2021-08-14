import React, { VFC } from 'react';
import Link from 'next/link';

export const Header: VFC = () => {
  return (
    <header className="bg-yellow-400 h-16">
      <div className="float-left w-1/2 text-2xl pl-12 text-red-400 h-full flex content-center flex-wrap">
        <Link href="/">
          <a>
            <p className="text-left font-bold">R-MEN</p>
          </a>
        </Link>
      </div>
    </header>
  );
};
