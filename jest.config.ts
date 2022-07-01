import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

process.env.TZ = 'UTC';

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    'ˆstorybook/(.*)$': '<rootDir>/.storybook/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^data/(.*)$': '<rootDir>/src/data/$1',
    '^graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^redux/(.*)$': '<rootDir>/src/redux/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^contracts/(.*)$': '<rootDir>/src/contracts/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^uuid/(.*)$': '<rootDir>/node_modules/uuid/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //   },
  // },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      useESM: true,
    },
  },
};

const newCreateJestConfig = async () => {
  const fn = createJestConfig(customJestConfig);
  const res = await fn();

  res.transformIgnorePatterns = res.transformIgnorePatterns.map(
    (pattern: string) => {
      if (pattern === '/node_modules/') {
        return '/node_modules/(?!uuid)';
      }
      return pattern;
    }
  );

  return res;
};

export default newCreateJestConfig;
