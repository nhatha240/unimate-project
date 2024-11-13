
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join("@", 'styles')],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // experimental: {
    //     serverActions: {
    //       allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    //     },
    //   },
};

export default nextConfig;
