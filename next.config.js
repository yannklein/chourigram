/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/chourigram',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;