import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">회사</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">소개</a></li>
              <li><a href="#" className="hover:text-white">채용</a></li>
              <li><a href="#" className="hover:text-white">뉴스</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">문의</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">배송안내</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">정책</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">이용약관</a></li>
              <li><a href="#" className="hover:text-white">개인정보보호</a></li>
              <li><a href="#" className="hover:text-white">쿠키정책</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">연결</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm font-bold text-white mb-2">회사정보</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                (주)신한은행<br />
                대표자명: 정상혁<br />
                사업자번호: 202-81-02637
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-2">주소</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                서울특별시 중구 세종대로 9길 20(태평로2가)
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 border-t border-gray-700 pt-4">
            © 2025 Shinhan DDangMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
