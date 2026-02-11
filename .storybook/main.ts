import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite'; // Добавьте этот импорт
// import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
    'stories': [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    'addons': [
        '@chromatic-com/storybook',
        '@storybook/addon-vitest',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-themes'
    ],
    // 'framework': '@storybook/nextjs-vite',
    'framework': {
        name: '@storybook/nextjs-vite',
        options: {
            image: {
                excludeFiles: ['**/*.svg'], // Исключаем SVG из обработки Next Image
            },
        },
    },
    'staticDirs': [
        '..\\public',
        '../src/shared/assets/'
    ],
    async viteFinal(config) {
        config.plugins = [
            svgr({
                include: '**/*.svg',
                svgrOptions: {
                    exportType: 'default',
                },
            }),
            ...(config.plugins || []),
        ];

        return config;
    },
};
export default config;
