import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // cacheComponents: true,
    // env: {
    //     _IS_DEV_: process.env.NODE_ENV === BuildMode.DEV ? 'true' : 'false',
    //     _BASE_URL_: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    //     _PROJECT_: BuildProject.FRONTEND,
    // },
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'X-Frame-Options',
    //                     value: 'DENY',
    //                 },
    //                 {
    //                     key: 'X-Content-Type-Options',
    //                     value: 'nosniff',
    //                 },
    //                 {
    //                     key: 'Strict-Transport-Security',
    //                     value: 'max-age=31536000; includeSubDomains; preload',
    //                 },
    //             ],
    //         },
    //     ]
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'api.egor-badulin.ru',
                pathname: '/uploads/**',
            }
        ],
        qualities: [75, 90, 100],
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.ts',
            },
        }
    },
    // output: 'standalone',
};

export default withSentryConfig(nextConfig, {
    org: 'egor-badulin',
    project: 'egor-badulin-home',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
});
