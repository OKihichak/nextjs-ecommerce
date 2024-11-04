// Correct `next.config.js` using CommonJS syntax
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
