import { describe, expect, it } from 'vitest';
import { SmellyMarsRoverKata } from 'src/smelly-mars-rover-kata.ts';

describe('Smelly Mars Rover Kata', () => {
    it('Creating an instance of the SmellyMarsRoverKata class should work', () => {
        const smellyMarsRoverKata = new SmellyMarsRoverKata();
        expect(smellyMarsRoverKata).toBeDefined();
    });
});
