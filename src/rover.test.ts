import { beforeEach, describe, expect, test } from 'vitest';
import { Rover } from 'src/rover.ts';
import { Plateau } from 'src/plateau.ts';

describe('MarsRoverShould', () => {
    let plateau: Plateau;

    beforeEach(() => {
        plateau = new Plateau();
    });

    test.each([
        ['', '', '0 0 N'],
        ['1 2 N', '', '1 2 N'],
        ['1 2 X', '', '1 2 N'],
        ['1 2 N', 'L', '1 2 W'],
        ['1 2 W', 'L', '1 2 S'],
        ['1 2 S', 'L', '1 2 E'],
        ['1 2 E', 'L', '1 2 N'],
        ['1 2 N', 'R', '1 2 E'],
        ['1 2 E', 'R', '1 2 S'],
        ['1 2 S', 'R', '1 2 W'],
        ['1 2 W', 'R', '1 2 N'],
        ['1 2 N', 'M', '1 3 N'],
        ['1 2 E', 'M', '2 2 E'],
        ['1 2 S', 'M', '1 1 S'],
        ['1 2 W', 'M', '0 2 W'],
        ['1 2 N', 'LMLMLMLMM', '1 3 N'],
        ['3 3 E', 'MMRMMRMRRM', '5 1 E'],
    ])(
        "start at '%s', with instructions '%s' => '%s'",
        (startingPosition, instructions, expectedOutput) => {
            const rover = new Rover();
            rover.land(plateau, startingPosition);

            rover.go(instructions);
            expect(rover.reportPosition()).toBe(expectedOutput);
        },
    );

    test('report empty position when not landed', () => {
        const rover = new Rover();
        expect(rover.reportPosition()).toBe('');
    });

    test('not handle commands when not landed', () => {
        const rover = new Rover();
        const result = rover.go('L');
        expect(result).toBe(false);
    });

    test('handle commands when landed', () => {
        const rover = new Rover();
        rover.land(plateau, '1 2 N');

        const result = rover.go('L');
        expect(result).toBe(true);
    });
});
