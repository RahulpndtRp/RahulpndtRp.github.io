/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
}

export default nextConfig;