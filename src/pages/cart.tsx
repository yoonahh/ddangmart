import React from 'react';
import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Banner } from '@components/Banner';

export default function Cart() {
  return (
    <>
      <Head>
        <title>장바구니 - 땡마트</title>
      </Head>

      <Header cartCount={0} />

      <main>
        <Banner title="장바구니" />

        <section className="container-custom py-12">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">장바구니가 비어있습니다</h2>
            <p className="text-gray-600 mb-6">
              상품을 추가하여 쇼핑을 시작해보세요
            </p>
            <a href="/" className="btn-primary inline-block">
              쇼핑 계속하기
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
