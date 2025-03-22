/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**', 

            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'en.chessbase.com',
                pathname: '/**', 

            },
            {
                protocol: 'https',
                hostname: 'fm-maheswaran-blog.s3.ap-southeast-1.amazonaws.com',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
