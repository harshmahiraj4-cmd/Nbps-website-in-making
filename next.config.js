/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        // Gemini/AI-generated image CDN
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
    // Optimize local images automatically
    formats: ['image/webp', 'image/avif'],
  },
  // Compress responses
  compress: true,
  // Strict mode helps catch bugs early
  reactStrictMode: true,
  // Ignore TS build errors that don't affect runtime (optional — remove for stricter prod)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
