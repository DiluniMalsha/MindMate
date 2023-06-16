module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        "jest":true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'settings':{
        "react":{
            "version": "detect",
        }
    },
    'parserOptions': {
        'ecmaVersion': 'latest',
        "sourceType": "module"
    },
    'plugins': [
        'react'
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
        "react/react-in-jsx-scope":"off"
    },
};
