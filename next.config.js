/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["heliotrope.saebasol.org"],
  },
};
module.exports = nextConfig;
