import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { HeroBanner } from '@components/Banner';
import { CategoryList } from '@components/CategoryList';
import { ProductCard } from '@components/ProductCard';
import { useCart } from '@hooks/useCart';
import type { Product, Market } from '@/types/index';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const { items, addItem } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockMarkets: Market[] = [
          { id: '1', name: '강경수산', icon: '🐟', count: 45, description: '싱싱한 생선' },
          { id: '2', name: '남대문시장', icon: '🥘', count: 128, description: '한복과 생활용품' },
          { id: '3', name: '동대문야채', icon: '🥬', count: 67, description: '신선한 채소' },
          { id: '4', name: '종로육류', icon: '🥩', count: 52, description: '프리미엄 고기' },
          { id: '5', name: '약령시', icon: '🌿', count: 89, description: '한약재와 건강식품' },
          { id: '6', name: '중앙계란시장', icon: '��', count: 34, description: '신선한 계란' },
          { id: '7', name: '오일장', icon: '🍞', count: 76, description: '빵과 제과' },
          { id: '8', name: '청계천생선', icon: '🦐', count: 58, description: '해산물 전문' },
        ];

        const mockProducts: Product[] = [
          {
            id: '1',
            name: '활 우럭 1kg',
            price: 24000,
            originalPrice: 32000,
            image: 'https://via.placeholder.com/300x200?text=Fish',
            market: '강경수산',
            marketType: '수산',
            isNew: true,
          },
          {
            id: '2',
            name: '유기농 무 2kg',
            price: 5900,
            originalPrice: 8900,
            image: 'https://via.placeholder.com/300x200?text=Vegetable',
            market: '동대문야채',
            marketType: '야채',
          },
          {
            id: '3',
            name: '한우 등심 500g',
            price: 42000,
            image: 'https://via.placeholder.com/300x200?text=Beef',
            market: '종로육류',
            marketType: '육류',
          },
          {
            id: '4',
            name: '인삼 100g',
            price: 18000,
            originalPrice: 25000,
            image: 'https://via.placeholder.com/300x200?text=Ginseng',
            market: '약령시',
            marketType: '한약재',
          },
          {
            id: '5',
            name: '계란 30개',
            price: 12000,
            image: 'https://via.placeholder.com/300x200?text=Eggs',
            market: '중앙계란시장',
            marketType: '계란',
            isNew: true,
          },
          {
            id: '6',
            name: '생크림 식빵',
            price: 8500,
            originalPrice: 10000,
            image: 'https://via.placeholder.com/300x200?text=Bread',
            market: '오일장',
            marketType: '베이커리',
          },
        ];

        setMarkets(mockMarkets);
        setProducts(mockProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    alert(`${product.name}이(가) 장바구니에 추가되었습니다!`);
  };

  return (
    <>
      <Head>
        <title>땡마트 - 신한은행 땡겨요 | 전통시장 장보기</title>
        <meta name="description" content="신한은행 땡겨요 서비스로 전통시장 상품을 온라인으로 구매하세요" />
      </Head>

      <Header cartCount={items.length} />

      <main>
        <HeroBanner showCharacters={true} />

        <section className="container-custom py-20">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              🏪 우리 동네 전통시장
            </h2>
            <p className="text-lg text-gray-600">
              신선한 상품을 보유한 전통시장을 선택하세요
            </p>
          </div>
          <CategoryList markets={markets} />
        </section>

        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container-custom">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-bold text-shinhan-primary">이주의 추천</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                신상품 & 특가
              </h2>
              <p className="text-lg text-gray-600">
                신선한 제철 상품과 한정 특가 상품을 한눈에 보세요
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card animate-pulse h-80" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="container-custom py-20">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
            쏠과 몰리와 함께
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 h-40 flex items-center justify-center bg-yellow-200 rounded-xl overflow-hidden">
                  <img src="/images/sol.svg" alt="쏠 캐릭터" className="h-full w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">쏠</h3>
                <p className="text-gray-600 leading-relaxed">
                  신한 쏠 앱에서 모든 거래를 한눈에 관리하고, 포인트도 자동으로 적립받으세요
                </p>
                <div className="mt-6 pt-6 border-t border-yellow-200">
                  <p className="text-xs font-bold text-yellow-700">자산관리 AI</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-shinhan-primary/20">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 h-40 flex items-center justify-center bg-pink-200 rounded-xl overflow-hidden">
                  <img src="/images/molly.svg" alt="몰리 캐릭터" className="h-full w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">몰리</h3>
                <p className="text-gray-600 leading-relaxed">
                  몰리가 추천하는 신선한 전통시장 상품들을 먼저 만나보세요
                </p>
                <div className="mt-6 pt-6 border-t border-pink-200">
                  <p className="text-xs font-bold text-pink-700">쇼핑 도우미</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-300">🚀</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">당일 배송</h3>
                <p className="text-gray-600 leading-relaxed">
                  전통시장에서 직접 받은 신선한 상품을 당일 배송으로 받아보세요
                </p>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-xs font-bold text-green-700">빠른 배송</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-shinhan-primary via-blue-600 to-purple-600 text-white py-20">
          <div className="container-custom text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest opacity-90">🎁 신한은행 고객 전용</p>
              <h2 className="text-5xl font-black leading-tight">
                땡겨요와 함께<br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  전통시장 장보기
                </span>
              </h2>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              신한은행 고객이시면 추가 5% 할인과 쏠 포인트 2배 적립을 받을 수 있습니다
            </p>
            <button className="bg-white text-shinhan-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
              신한 쏠 앱 열기
            </button>
          </div>
        </section>

        <section className="container-custom py-20">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
            간단한 4단계
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: '시장 선택', desc: '가까운 전통시장을 선택하세요' },
              { step: 2, title: '상품 선택', desc: '신선한 상품을 고르세요' },
              { step: 3, title: '결제', desc: '안전하게 결제하세요' },
              { step: 4, title: '당일 배송', desc: '집에서 편하게 받으세요' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-shinhan-primary to-shinhan-secondary rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
