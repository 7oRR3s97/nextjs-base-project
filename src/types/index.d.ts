import { generateTestingUtils } from 'eth-testing';

declare global {
  interface Window {
    ethereum: any;
  }
  var testingUtils: ReturnType<typeof generateTestingUtils>;
}

export {};
