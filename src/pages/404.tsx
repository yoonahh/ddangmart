import React from 'react';
import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Banner } from '@components/Banner';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없습니다 - 땡마트</title>
      </Head>

      <Header />

      <main>
        <Banner title="페이지를 찾을 수 없습니다" />

        <section className="container-custom py-12">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">404</div>
            <h2 className="text-2xl font-bold mb-4">
              요청하신 페이지가 없습니다
            </h2>
            <p className="text-gray-600 mb-6">
              존재하지 않는 페이지입니다. 홈페이지로 이동해주세요.
            </p>
            <a href="/" className="btn-primary inline-block">
              홈으로 돌아가기
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
