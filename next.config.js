/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicit choice (matches Next's default): no trailing slash on URLs,
  // so /about and /about/ don't both resolve as separate pages.
  trailingSlash: false,
};

module.exports = nextConfig;
