module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'import/order': ['error', {
      'alphabetize': {
        order: 'asc',
      },
      'newlines-between': 'always',
    }],
  },
}
