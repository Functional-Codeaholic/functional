/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    images: {
        domains: ['https://brianquinneydev.netlify.app/', '192.168.1.29', 'localhost'],
        unoptimized: true,
    }
};

export default nextConfig;