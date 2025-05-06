import { describe, it, expect } from 'vitest';
import { Plateau } from 'src/plateau.ts';
import { Rover } from 'src/rover.ts';

describe('Plateau', () => {
    it('should add a rover', () => {
        const plateau = new Plateau();
        const rover = new Rover();

        const result = plateau.addRover(rover);
        expect(result).toBe(true);
    });
});
