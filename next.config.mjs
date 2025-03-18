/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove export for Vercel deployment
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle PDF loading through react-pdf
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    
    return config;
  },
};

export default nextConfig;