/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/our-process/:step', // Dynamic route pattern
        destination: '/our-process/step', // Actual page to render
      },
    ]
  },
}

module.exports = nextConfig