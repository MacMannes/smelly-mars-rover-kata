import { describe, expect, it } from 'vitest';
import { isDirection } from 'src/direction.ts';

describe('isDirection', () => {
    it.each([
        ['N', true],
        ['E', true],
        ['S', true],
        ['W', true],
        ['', false],
        ['SW', false],
    ])(
        'should determine "%s" to be a valid direction as %s',
        (direction, valid) => {
            const isValid = isDirection(direction);
            expect(isValid).toBe(valid);
        },
    );
});
