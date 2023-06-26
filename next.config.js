/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  distDir: 'NextBuild',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }

}

module.exports = nextConfig
