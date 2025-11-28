import React from 'react';

interface BannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <div
      className="relative bg-gradient-to-r from-shinhan-primary to-shinhan-secondary text-white py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-gray-100 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
};

interface HeroBannerProps {
  showCharacters?: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ showCharacters = true }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* 데코레이션 원형 */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-shinhan-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          {/* 왼쪽 콘텐츠 */}
          <div className="space-y-8">
            {/* 배지 */}
            <div className="inline-block">
              <span className="bg-gradient-to-r from-shinhan-primary to-shinhan-secondary text-white text-xs font-bold px-4 py-2 rounded-full">
                ✨ 신한은행 땡겨요 서비스
              </span>
            </div>

            {/* 제목 */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                <span className="text-shinhan-primary">전통시장</span><br />
                온라인에서<br />
                <span className="bg-gradient-to-r from-shinhan-primary to-purple-600 bg-clip-text text-transparent">
                  더 싸게
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                신선한 전통시장 상품을 집에서 편하게 구매하고,
                당일 배송으로 받아보세요.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-shinhan-primary to-shinhan-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                지금 시작하기
              </button>
              <button className="border-2 border-shinhan-primary text-shinhan-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                더 알아보기
              </button>
            </div>

            {/* 혜택 */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-shinhan-primary">8개</p>
                <p className="text-sm text-gray-600 mt-1">전통시장</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-shinhan-primary">5%</p>
                <p className="text-sm text-gray-600 mt-1">추가할인</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-shinhan-primary">당일</p>
                <p className="text-sm text-gray-600 mt-1">배송</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 캐릭터 */}
          {showCharacters && (
            <div className="relative h-96 hidden lg:flex items-center justify-center perspective">
              {/* 캐릭터 카드 1 */}
              <div className="absolute w-52 h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:shadow-3xl flex items-center justify-center group border-4 border-yellow-300/30">
                <div className="text-center space-y-2">
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-300">✨</div>
                  <h3 className="text-2xl font-black text-yellow-900">쏠</h3>
                  <p className="text-xs text-yellow-800 font-bold">자산관리 AI</p>
                </div>
              </div>

              {/* 캐릭터 카드 2 */}
              <div className="absolute w-52 h-64 bg-gradient-to-br from-pink-100 to-rose-200 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:shadow-3xl flex items-center justify-center group border-4 border-pink-300/30">
                <div className="text-center space-y-2">
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-300">🎀</div>
                  <h3 className="text-2xl font-black text-rose-900">몰리</h3>
                  <p className="text-xs text-rose-800 font-bold">쇼핑 도우미</p>
                </div>
              </div>

              {/* 캐릭터 카드 3 */}
              <div className="absolute w-52 h-64 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-2xl hover:rotate-0 transition-all duration-500 hover:shadow-3xl flex items-center justify-center group border-4 border-green-300/30">
                <div className="text-center space-y-2">
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-300">🏪</div>
                  <h3 className="text-2xl font-black text-green-900">전통시장</h3>
                  <p className="text-xs text-green-800 font-bold">신선함 보장</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
