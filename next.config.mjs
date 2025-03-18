/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/rezaca.net' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/rezaca.net' : '',
  webpack: (config) => {
    // Handle PDF loading through react-pdf
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    
    return config;
  },
};

export default nextConfig;