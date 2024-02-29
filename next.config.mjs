/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '//t1.kakaocdn.net',
        port: '',
        pathname: '/kakaocorp/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit.kr',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

export default nextConfig;
