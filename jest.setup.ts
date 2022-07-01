import '@testing-library/jest-dom/extend-expect';
import crypto from 'crypto';
import { QueryCache } from 'react-query';
import { generateTestingUtils } from 'eth-testing';
import { config } from 'react-transition-group';

config.disabled = true;

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
  },
});

beforeEach(() => {
  global.testingUtils = generateTestingUtils({ providerType: 'MetaMask' });
  global.window.ethereum = testingUtils.getProvider();
});

Object.defineProperty(global, 'process', {
  value: {
    ...process,
    versions: undefined,
  },
});

afterEach(() => {
  testingUtils.clearAllMocks();
});

afterAll(() => {
  new QueryCache().clear();
});
