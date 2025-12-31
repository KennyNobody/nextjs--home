import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* TODO: Включить reactStrictMode: true перед релизом для финальной проверки
       Выключен в dev - двойной рендер очищает Redux до завершения гидратации.
       Возможно стоит написать решение в месте конфликта
    */
    reactStrictMode: false,
    // cacheComponents: true,
    // env: {
    //     _IS_DEV_: process.env.NODE_ENV === BuildMode.DEV ? 'true' : 'false',
    //     _BASE_URL_: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    //     _PROJECT_: BuildProject.FRONTEND,
    // },
    async headers() {
        return [
            {
                source: '/meilisearch/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Headers', value: 'x-meilisearch-client' },
                ],
                has: [
                    {
                        type: 'host',
                        value: 'localhost:7700',
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
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.ts',
            },
        }
    }
};

export default nextConfig;
