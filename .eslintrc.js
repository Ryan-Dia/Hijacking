module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  extends: ['eslint:recommended', 'next', 'hijacking-ts'],

  rules: {
    'react/prop-types': 'off',

    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react/jsx-no-target-blank': 'error',

    'react/react-in-jsx-scope': 'off',

    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
