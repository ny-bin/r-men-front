import { ReactNode, VFC } from 'react';
import { CustomLayout } from 'next';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../Commons/Footer';
import { Header } from '../Commons/Header';

interface Props {
  children: ReactNode;
  title: string;
}
// { children, title = 'R-MEN' }: Props
export const Layout: CustomLayout = (page) => {
  return (
    <div>
      <Header />

      <main className="bg-yellow-100 h-auto">{page}</main>
      <Footer />
    </div>
  );
};
