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
  });
});
