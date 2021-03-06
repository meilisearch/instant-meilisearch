module.exports = {
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    {
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.test.json',
        },
      },
      preset: 'ts-jest',
      displayName: 'dom',
      // We are using jest-environment-jsdom 25 until we stop supporting node 10
      // jest-environment-jsdom 25 uses jsdom 15 which still supports node 10
      testEnvironment: 'jest-environment-jsdom',
      testPathIgnorePatterns: [
        '<rootDir>/tests/env',
        '<rootDir>/playgrounds',
        '<rootDir>/tests/assets',
      ],
      testMatch: ['**/*.tests.ts', '/tests/**/*.ts'],
    },
    {
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.test.json',
        },
      },
      preset: 'ts-jest',
      displayName: 'node',
      testEnvironment: 'node',
      testPathIgnorePatterns: [
        '<rootDir>/tests/env',
        '<rootDir>/playgrounds',
        '<rootDir>/tests/assets',
      ],
      testMatch: ['**/*.tests.ts', '/tests/**/*.ts'],
    },
  ],
}
