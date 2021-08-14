import { ReactNode, VFC } from 'react';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../Commons/Footer';
import { Header } from '../Commons/Header';

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: VFC<Props> = ({ children, title = 'R-MEN' }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="test.jpg" />
        <title>{title}</title>
        <meta
          name="description"
          content="ラーメン専門の検索アプリです。各地域、カテゴリ、ランキング等で絞り込むことができます。"
        />
      </Head>
      <Header />

      <main className="bg-yellow-100 h-auto">{children}</main>
      <Footer />
    </div>
  );
};
