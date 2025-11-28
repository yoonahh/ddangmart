/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ddangmart.shinhan.com'],
  },
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
