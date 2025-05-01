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

    describe('Equality check', () => {
        it('should return true for a string representing a valid direction', () => {
            const direction = new Direction('N');
            expect(direction.equals('N')).toBe(true);
        });

        it('should return false for a string representing an invalid direction', () => {
            const direction = new Direction('N');
            expect(direction.equals('X')).toBe(false);
        });

        it('should return true for another Direction instance with the same direction', () => {
            const direction1 = new Direction('N');
            const direction2 = new Direction('N');
            expect(direction1.equals(direction2)).toBe(true);
        });

        it('should return false for another Direction instance with a different direction', () => {
            const direction1 = new Direction('N');
            const direction2 = new Direction('E');
            expect(direction1.equals(direction2)).toBe(false);
        });

        it('should return false for a non-direction object', () => {
            const direction = new Direction('N');
            expect(direction.equals({})).toBe(false);
        });
    });
});
