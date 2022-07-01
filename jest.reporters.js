const { DefaultReporter } = require('@jest/reporters');

class Reporter extends DefaultReporter {
  constructor() {
    super(...arguments);
  }

  printTestFileHeader(_testPath, config, result) {
    const console = result.console;

    if (result.numFailingTests === 0 && !result.testExecError) {
      result.console = null;
    }

    super.printTestFileHeader(...arguments);

    result.console = console;
  }
}

module.exports = Reporter;

// import { DefaultReporter, Config, TestResult } from '@jest/reporters';

// class Reporter extends DefaultReporter {
//   constructor(args: Config.GlobalConfig) {
//     super({ ...args });
//   }

//   printTestFileHeader = (
//     _testPath: string,
//     config: Config.ProjectConfig,
//     result: TestResult
//   ) => {
//     const console = result.console;

//     if (result.numFailingTests === 0 && !result.testExecError) {
//       result.console = undefined;
//     }

//     super.printTestFileHeader(_testPath, config, result);

//     result.console = console;
//   };
// }

// export default Reporter;
