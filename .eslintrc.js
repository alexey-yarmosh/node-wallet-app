module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 2017,
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
    'no-param-reassign': 0,
    'global-require': 0,
    'no-return-await': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'no-restricted-globals': 0,
    'class-methods-use-this': 0,
    'no-unused-expressions': 0, // (because of emotion plugin) TODO 🔥: remove this
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'function-paren-newline': 0,
    'semi': ['error', 'never'],

    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    
    'jsx-quotes': [2, 'prefer-single'],

    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0
  }
};
