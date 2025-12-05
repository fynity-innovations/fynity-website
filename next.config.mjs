/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // ✅ REQUIRED for Hostinger static hosting
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
