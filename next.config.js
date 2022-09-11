/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

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
  sentry: {
    hideSourceMaps: true,
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

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
