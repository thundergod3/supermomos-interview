/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fixing Netlify build
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
