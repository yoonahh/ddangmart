import React from 'react';

interface HeaderProps {
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom flex items-center justify-between h-20">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex items-center">
            <div className="text-3xl font-black">
              <span className="text-shinhan-primary">땡</span><span className="text-shinhan-accent">마</span><span className="text-shinhan-primary">트</span>
            </div>
            <div className="ml-3 border-l border-gray-300 pl-3">
              <div className="text-xs font-bold text-gray-700">by</div>
              <div className="text-sm font-bold text-shinhan-primary">신한은행</div>
            </div>
          </div>
        </a>

        {/* 네비게이션 */}
        <ul className="hidden lg:flex gap-12">
          <li>
            <a href="/" className="text-gray-700 hover:text-shinhan-primary transition font-medium text-sm">
              홈
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-shinhan-primary transition font-medium text-sm">
              전통시장
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-shinhan-primary transition font-medium text-sm">
              추천상품
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-shinhan-primary transition font-medium text-sm">
              이벤트
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-shinhan-primary transition font-medium text-sm">
              고객지원
            </a>
          </li>
        </ul>

        {/* 우측 버튼 */}
        <div className="flex items-center gap-3">
          <button className="relative flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-shinhan-primary hover:bg-blue-50 transition text-sm font-medium text-gray-700">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-shinhan-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="bg-gradient-to-r from-shinhan-primary to-shinhan-secondary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm">
            로그인
          </button>
        </div>
      </nav>
    </header>
  );
};
