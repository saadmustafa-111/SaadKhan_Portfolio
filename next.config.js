/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image3.jdomni.in',
      'image2.jdomni.in'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.jdomni.in',
      },
    ],
  },
}

module.exports = nextConfig
