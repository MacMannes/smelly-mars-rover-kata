import { describe, expect, it } from 'vitest';
import { Direction } from 'src/direction.ts';

describe('Direction class', () => {
    it.each([
        ['N', 'N'],
        ['E', 'E'],
        ['S', 'S'],
        ['W', 'W'],
        ['', 'N'],
        ['SW', 'N'],
    ])(
        'intantiated with type "%s" should have directionType "%s"',
        (directionType, expected) => {
            const directionClass = new Direction(directionType);
            expect(directionClass.toString()).toBe(expected);
        },
    );
});
