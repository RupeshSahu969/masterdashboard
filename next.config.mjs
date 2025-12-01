/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/maintenance/:path*', destination: 'https://maintenance-backend.sagartmt.com/:path*' },
      { source: '/store/:path*', destination: 'https://storebackend.sagartmt.com/:path*' },
      { source: '/subscription/:path*', destination: 'https://subscription-backend.sagartmt.com/:path*' },
      { source: '/repair/:path*', destination: 'https://repair-systembackend.sagartmt.com/:path*' },
    ]
  },
}

export default nextConfig
