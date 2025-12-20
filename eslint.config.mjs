import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
    ...nextVitals,
    // Override default ignores of eslint-config-next.
    {
        name: 'eslint/rules',
        rules: {
            'react/jsx-indent': [1, 4],
            'react/react-in-jsx-scope': [0],
            'react/jsx-indent-props': [2, 4],
            'react/require-default-props': [0],
            'react/jsx-props-no-spreading': [0],
            'react/function-component-definition': [0],
            'indent': [1, 4],
            'max-len': [0],
            'no-unused-vars': [0],
            'no-underscore-dangle': [0],
            'import/prefer-default-export': [0],
            'import/no-extraneous-dependencies': [0],
            '@typescript-eslint/naming-convention': [0],
            'jsx-a11y/label-has-associated-control': [0],
            'linebreak-style': [1, 'windows'],
            'react/no-array-index-key': [0],
            'react-hooks/rules-of-hooks': [0],
            'react-hooks/exhaustive-deps': [0],
            'no-param-reassign': [0],
            'no-restricted-syntax': [0],
            'react/prop-types': [0],
            'import/extensions': [0],
            'react/button-has-type': [0],
            'react/no-danger': [0],
            'object-curly-spacing': [2, 'always'],
            'quotes': [2, 'single'],
            '@typescript-eslint/no-unsafe-argument': 'off'
        },
    },
    {
        name: 'eslint/files',
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        }
    },
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])

export default eslintConfig
