import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* TODO: Включить reactStrictMode: true перед релизом для финальной проверки
       Выключен в dev - двойной рендер очищает Redux до завершения гидратации.
       Возможно стоит написать решение в месте конфликта
    */
    reactStrictMode: true,
    // cacheComponents: true,
    // env: {
    //     _IS_DEV_: process.env.NODE_ENV === BuildMode.DEV ? 'true' : 'false',
    //     _BASE_URL_: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    //     _PROJECT_: BuildProject.FRONTEND,
    // },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                ],
            },
        ]
    },
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
    output: 'standalone',
};

export default nextConfig;
