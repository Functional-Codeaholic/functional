/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://brianquinney.dev/', 'https://heroku.brianquinney.dev/', 'https://brianquinneydev.netlify.app/', '192.168.1.29', 'localhost'],
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    }
};

export default nextConfig;