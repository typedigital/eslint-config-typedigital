import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';

describe('typescript config', () => {
  it('should find a warning for @typescript-eslint/explicit-module-boundary-types', async () => {
    // arrange
    const linter = new ESLint();
    const fileName = 'tests/typescript/helper.ts';

    // act
    const [result] = await linter.lintFiles([fileName]);

    // assert
    expect(result.warningCount).toBe(1);
    expect(result.messages.some((message) => message.ruleId === '@typescript-eslint/explicit-module-boundary-types')).toBe(true); // using Array.prototype.some https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  });
  it('should find an error for no-implicit-coercion', async () => {
    // arrange
    const linter = new ESLint();
    const fileName = 'tests/typescript/helper.ts';

    // act
    const [result] = await linter.lintFiles([fileName]);

    // assert
    expect(result.errorCount).toBe(1);
    expect(result.messages.some((message) => message.ruleId === 'no-implicit-coercion')).toBe(true);
  });
});
