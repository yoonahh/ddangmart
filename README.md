# 땡마트 - 신한은행 땡겨요 홈페이지

신한은행에서 새로 출시한 땡겨요 서비스의 땡마트 홈페이지입니다.

## 🚀 프로젝트 소개

**땡마트**는 신한은행의 땡겨요 서비스를 통해 제공되는 현대적인 이커머스 플랫폼입니다.

- ⚡ 빠른 배송 서비스
- 💰 최저가 보장
- 🛡️ 신한은행의 신뢰성으로 안전한 거래

## 📋 프로젝트 구조

```
ddangmart/
├── src/
│   ├── pages/              # Next.js 페이지
│   │   ├── _app.tsx        # 앱 진입점
│   │   ├── _document.tsx   # HTML 문서
│   │   ├── index.tsx       # 홈페이지
│   │   ├── cart.tsx        # 장바구니 페이지
│   │   └── 404.tsx         # 404 페이지
│   ├── components/         # React 컴포넌트
│   │   ├── Header.tsx      # 헤더
│   │   ├── Footer.tsx      # 푸터
│   │   ├── Banner.tsx      # 배너
│   │   ├── ProductCard.tsx # 상품 카드
│   │   └── CategoryList.tsx# 카테고리 목록
│   ├── hooks/              # 커스텀 React Hook
│   │   └── useCart.ts      # 장바구니 상태 관리
│   ├── utils/              # 유틸리티 함수
│   │   ├── api.ts          # API 클라이언트
│   │   └── helpers.ts      # 헬퍼 함수
│   ├── types/              # TypeScript 타입 정의
│   │   └── index.ts        # 타입 모음
│   └── styles/             # 스타일
│       └── globals.css     # 전역 스타일
├── public/                 # 정적 파일
├── package.json            # 프로젝트 의존성
├── tsconfig.json           # TypeScript 설정
├── next.config.js          # Next.js 설정
├── tailwind.config.js      # Tailwind CSS 설정
└── postcss.config.js       # PostCSS 설정
```

## 🛠️ 기술 스택

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 1️⃣ 의존성 설치
```bash
npm install
```

### 2️⃣ 개발 서버 실행
```bash
npm run dev
```

### 3️⃣ 홈페이지 열기

**간단한 주소로 접속:**
```
http://localhost:3001
```

**또는 스크립트로 한 번에 실행:**
```bash
bash start.sh
```

**또는 터미널에서 자동으로 열기:**
```bash
open http://localhost:3001  # macOS
xdg-open http://localhost:3001  # Linux
start http://localhost:3001  # Windows
```

> 💡 **TIP**: 북마크에 `http://localhost:3001` 을 추가하면 매번 쉽게 접속할 수 있습니다!

## 🎨 주요 기능

### 홈페이지
- 메인 배너
- 카테고리 네비게이션
- 상품 그리드 (할인 정보 표시)
- 특징 섹션

### 장바구니
- 상품 추가/제거
- 수량 관리
- 가격 계산

### 반응형 디자인
- 모바일 최적화
- 태블릿 대응
- 데스크톱 완벽 지원

## 🛠️ 개발 명령어

```bash
# 개발 서버 실행 (핫 리로드)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# TypeScript 타입 체크
npm run type-check

# ESLint 검사
npm run lint
```

## 🔌 API 연동

API 엔드포인트를 설정하려면 `.env.local` 파일을 생성하세요:

```bash
NEXT_PUBLIC_API_URL=https://api.ddangmart.shinhan.com
```

## 📝 환경 변수

`.env.local` 파일 예시:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🎯 앞으로의 개발 계획

- [ ] 상품 상세 페이지
- [ ] 결제 시스템 통합
- [ ] 사용자 인증
- [ ] 주문 관리
- [ ] 리뷰 시스템
- [ ] 추천 알고리즘
- [ ] 관리자 대시보드

## 📄 라이선스

이 프로젝트는 신한은행에서 관리합니다.

## 📞 지원

문제가 발생하거나 질문이 있으시면 GitHub Issues에서 보고해주세요.

---

**개발자**: Shinhan Bank Development Team  
**시작일**: 2025-11-25  
**버전**: 1.0.0