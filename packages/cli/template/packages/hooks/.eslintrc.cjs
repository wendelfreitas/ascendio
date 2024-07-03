/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  root: true,
  extends: ['@ascendio/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
