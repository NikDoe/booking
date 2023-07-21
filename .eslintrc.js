module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'object-curly-spacing': ['error', 'always'],
    }
};
