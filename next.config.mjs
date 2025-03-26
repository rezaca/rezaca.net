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
    
    // Support for PDF files and workers
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  experimental: {
    optimizeFonts: true,
  },
  // Add static asset handling for PDFs
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ];
  },
};

export default nextConfig;