/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  root: true,
  extends: [
    '@ascendio/eslint-config/react-internal.js',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};
