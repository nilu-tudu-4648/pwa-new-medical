/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "lh3.googleusercontent.com",
    ],
  },
  env: {
    MERCURIAL_BACKEND_API: "https://mercurial-api.nirmitee.io/api",
  },
};

module.exports = nextConfig;
