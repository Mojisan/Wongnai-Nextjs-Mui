/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.wongnai.com',
        hostname: 'static2.wongnai.com'
      },
    ],
  },
}

module.exports = nextConfig
