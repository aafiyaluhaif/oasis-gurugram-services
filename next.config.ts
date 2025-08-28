import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export
  basePath: '/lp/gurugram/services',
  assetPrefix: '/lp/gurugram/services',
  trailingSlash: true, // ← forces /thankyou/index.html instead of thankyou.html

  images: {
    unoptimized: true, // <-- add this line
  },
};

export default nextConfig;
