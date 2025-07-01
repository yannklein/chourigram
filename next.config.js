/** @type {import('next').NextConfig} */
const isDev = process.env.IS_DEV === 'true';

const nextConfig = {
  output: 'export',
  basePath: isDev ? '' : '/chourigram',
  assetPrefix: isDev ? '' : '/chourigram',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;