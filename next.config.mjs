/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove export for Vercel deployment
  images: {
    unoptimized: true,
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
  },
  webpack: (config) => {
    // Handle PDF loading through react-pdf
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    
    return config;
  },
  experimental: {
    optimizeFonts: true,
  },
};

export default nextConfig;