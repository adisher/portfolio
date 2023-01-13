/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'scontent.fisb5-2.fna.fbcdn.net',
      'icon-library.com'
    ],
  },
}

module.exports = nextConfig