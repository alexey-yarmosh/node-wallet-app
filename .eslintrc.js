module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'rules': {
    'strict': 0,
    'comma-dangle': 0,
    'no-tabs': 0,
    'indent': 0,
    'arrow-parens': [2, 'always'],
    'no-underscore-dangle': [2, {'allowAfterThis': true}],
    'max-len': [2, 120, 4, {'ignoreUrls': true}],
    'no-confusing-arrow': [2, {'allowParens': true}],
    'no-alert': 0,
    'object-curly-spacing': [2, 'always'],
    'eol-last': 0,
    'linebreak-style': 0,
    'no-else-return': 0,
    'arrow-parens': ['error', 'as-needed'],

    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,

    'jsx-quotes': [2, 'prefer-single'],

    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/require-default-props': 0,
    'react/no-array-index-key': 0
  }
};
