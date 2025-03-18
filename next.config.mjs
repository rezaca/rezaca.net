/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  webpack: (config) => {
    // Handle PDF loading through react-pdf
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    
    return config;
  },
};

export default nextConfig;