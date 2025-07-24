/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    // Uncommented basePath for GitHub Pages deployment
    basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : ''
    images: {
        deviceSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: ['localhost', 'raw.githubusercontent.com'],
        formats: ['image/webp', 'image/avif'],
        unoptimized: true
    },
};

export default nextConfig;