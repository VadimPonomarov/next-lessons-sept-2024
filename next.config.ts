import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                port: '3000',
                pathname: '/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
