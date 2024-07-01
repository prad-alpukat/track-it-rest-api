/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/docs',
                destination: '/api/docs',
            },
        ];
    },
};

export default nextConfig;
