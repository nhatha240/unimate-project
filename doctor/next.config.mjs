
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join("@", 'styles')],
    },
    ignoreDuringBuilds: true,
    // experimental: {
    //     serverActions: {
    //       allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    //     },
    //   },
};

export default nextConfig;
