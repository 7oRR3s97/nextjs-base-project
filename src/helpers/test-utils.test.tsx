import * as TestUtils from './test-utils';
import { objectKeys } from 'helpers/typescript/helpers';

describe('TestUtils', () => {
  it('should have exports', () => {
    jest.mock('./test-utils', () => jest.fn());
    expect(typeof TestUtils).toBe('object');
  });

  it('should not have undefined exports', () => {
    objectKeys(TestUtils).forEach((exportKey) =>
      expect(Boolean(TestUtils[exportKey])).toBe(true)
    );
  });
});
