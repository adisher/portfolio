/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'icon-library.com'
    ],
  },
}

module.exports = nextConfig