const base = require('../../config/eslint.base.cjs');

module.exports = [
  ...base,
  {
    ignores: ['dist', 'node_modules'],
  },
];
