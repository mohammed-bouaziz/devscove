/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000',
      },
    ]
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mohammed.sirv.com'
          },
          {
            protocol: 'https',
            hostname: 'devscove-backend-0fdec5ed1fa3.herokuapp.com'
          },
          {
            protocol: 'http',
            hostname: '127.0.0.1'
          }
        ],
      },
}

module.exports = nextConfig
