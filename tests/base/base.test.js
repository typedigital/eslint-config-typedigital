import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';

describe('base config', () => {
  it('should allow spreading of array elements', async () => {
    // arrange
    const linter = new ESLint();
    const fileName = 'tests/base/array-spread.js';

    // act
    const [result] = await linter.lintFiles([fileName]);

    // assert
    expect(result.warningCount).toBe(0);
    expect(result.messages.some((message) => message.ruleId === 'array-func/prefer-array-from')).toBe(false);
  });
  
  it('should allow up to 500 lines in a js-file', async () => {
    // arrange
    const linter = new ESLint();
    const correctFile = 'tests/base/right-lines.js';
    const failingFile = 'tests/base/max-lines.js';

    // act
    const [correctResult] = await linter.lintFiles([correctFile]);
    const [failingResult] = await linter.lintFiles([failingFile]);

    // assert
    expect(correctResult.warningCount).toBe(0);
    expect(correctResult.messages.some((message) => message.ruleId === 'max-lines')).toBe(false);
    expect(failingResult.warningCount).toBe(1);
    expect(failingResult.messages.some((message) => message.ruleId === 'max-lines')).toBe(true);
  });
  
  it('should allow more then 3 params passed to function', async () => {
    // arrange
    const linter = new ESLint();
    const fileName = 'tests/base/function-param-test.js';

    // act
    const [result] = await linter.lintFiles([fileName]);

    // assert
    expect(result.warningCount).toBe(0);
  });

});
