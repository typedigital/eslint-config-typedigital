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
    const fileName = 'tests/base/max-lines.js';

    // act
    const [result] = await linter.lintFiles([fileName]);

    // assert
    expect(result.warningCount).toBe(0);
    expect(result.messages.some((message) => message.ruleId === 'max-lines')).toBe(false);
  });
});
