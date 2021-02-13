module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'react-native/react-native': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react-native'
    ],
    'rules': {
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-trailing-spaces': ['error',{ skipBlankLines: false, ignoreComments: true }],
        'indent': ['error', 4]
    }
};
