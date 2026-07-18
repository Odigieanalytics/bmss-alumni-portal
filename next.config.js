/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure public folder is included in output
  publicRuntimeConfig: {
    staticFolder: '/images',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co', pathname: '/storage/v1/object/public/**' }
    ]
  }
};
module.exports = nextConfig;
