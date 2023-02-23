import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';

describe('base config', () => {
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
