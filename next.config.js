/** @type {import('next').NextConfig} */

const shouldAnalyzeBundles = process.env.ANALYZE === 'true';
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
}

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
    require('next-bundle-analyzer')({
      format: 'html',
      enabled: true,
      html: {
        open: true
      }
    });
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig
