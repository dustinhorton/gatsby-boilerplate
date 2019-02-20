module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'prettier',
  ],
  //'plugins': [
  //  'prettier',
  //],
  'rules': {
    'class-methods-use-this': 0,  // forces static render methods if not referencing `this`
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-undef': 0,  // `props`, `window`, etc.
    'spaced-comment': 0,
    'import/no-extraneous-dependencies': 0,  // react & gatsby deps
    'import/no-unresolved': 0,  // false positives
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,  // PropTypes.object
    'react/jsx-closing-bracket-location': [2, {
      'nonEmpty': 'after-props',
      'selfClosing': 'tag-aligned',
    }],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-children-prop': 0,
    'react/prop-types': [2, {
      ignore: [
        'data',  // graphql
        'location',  // react router
      ],
    }],
    'react/require-default-props': 0,
  },
}