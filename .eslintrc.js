module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'plugin:react-app/recommended',
    'plugin:unicorn/recommended',
  ],
  'plugins': [
    'modules-newline',
    'unicorn',
  ],
  'rules': {
    'class-methods-use-this': 0,  // forces static render methods if not referencing `this`
    'eol-last': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-undef': 0,  // `props`, `window`, etc.
    'object-curly-newline': [
      2,
      {
        'consistent': true,
        'multiline': true,
      },
    ],
    'semi': 0,
    'spaced-comment': 0,
    'import/no-extraneous-dependencies': 0,  // react & gatsby deps
    'import/no-unresolved': 0,  // false positives
    'modules-newline/export-declaration-newline': 2,
    'modules-newline/import-declaration-newline': 2,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,  // PropTypes.object
    'react/jsx-closing-bracket-location': [
      2,
      {
        'nonEmpty': 'after-props',
        'selfClosing': 'tag-aligned',
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-children-prop': 0,
    'react/prop-types': [
      2,
      {
        ignore: [
          'data',  // graphql
          'location',  // react router
        ],
      },
    ],
    'react/require-default-props': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-null': 0,
    'unicorn/no-unused-properties': 2,
    'unicorn/no-zero-fractions': 0,
    'unicorn/prevent-abbreviations': [
      2,
      {
        'replacements': {
          'env': false,
          'props': false,
          'ref': false,
          'src': false,
        },
        'whitelist': {
          'e164': true,
          'prevState': true,
        },
      },
    ],

    // TODO
    'no-console': 0,
  },
}