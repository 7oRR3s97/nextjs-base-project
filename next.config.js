/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    images: {
      domains: ['api.qrserver.com'],
    },
    i18n,
    pwa: {
      dest: 'public',
      runtimeCaching,
      disable: process.env.NODE_ENV === 'development',
    },
  })
);

module.exports = nextConfig;
