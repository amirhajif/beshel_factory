/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    /*
    this allows production builds to successfully complete even if
    project has ESLint errors.
    */
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
