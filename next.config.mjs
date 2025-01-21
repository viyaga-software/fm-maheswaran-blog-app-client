/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**', // Adjust based on your image path

            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**', // Adjust based on your image path
            },
            {
                protocol: 'https',
                hostname: 'en.chessbase.com',
                pathname: '/**', // Adjust based on your image path

            },
        ],
    },
};

export default nextConfig;
