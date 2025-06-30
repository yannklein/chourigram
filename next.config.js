/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/chourigram',
  assetPrefix: '/chourigram',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;