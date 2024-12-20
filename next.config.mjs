/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "axyinjgvxphcbbynygia.supabase.co"
            },
            {
                protocol: 'https',
                hostname: "img.clerk.com"
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
