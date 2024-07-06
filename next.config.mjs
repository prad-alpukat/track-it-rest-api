import { headers } from 'next/headers';

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
    async headers() {
        return [
            {
                source: '/api/*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Accept',
                    },
                ]
            }
        ]
    }
};

export default nextConfig;
