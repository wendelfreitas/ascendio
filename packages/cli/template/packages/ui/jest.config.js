module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@ascendio|utils)/)', // Add any other packages here
  ],
  moduleNameMapper: {
    '^@ascendio/(.*)$': '<rootDir>/../utils/src/helpers', // Adjust this according to your monorepo structure
  },
};
