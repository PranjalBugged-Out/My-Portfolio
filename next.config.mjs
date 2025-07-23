/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: ['localhost', 'raw.githubusercontent.com'],
        formats: ['image/webp', 'image/avif']
    },
};

export default nextConfig;