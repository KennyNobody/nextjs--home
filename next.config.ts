import type { NextConfig } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

const globalDir = join(process.cwd(), 'src/shared/styles/global');
const mixinsPath = join(globalDir, 'mixins.scss');
const mixins = readFileSync(mixinsPath, 'utf8');

const nextConfig: NextConfig = {
    reactStrictMode: true,
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
    sassOptions: {
        // additionalData: '@import "src/styles/mixins.scss";',
        // Или если используете абсолютные импорты:
        // additionalData: `
        //     @function rem($px) {
        //         @return calc(#{$px} / 16 * 1rem);
        //     }
        //
        //     @mixin flex-center {
        //         display: flex;
        //         align-items: center;
        //         justify-content: center;
        //     }
        // `,
        additionalData: mixins,
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
            }
        ],
    },
};

export default nextConfig;
