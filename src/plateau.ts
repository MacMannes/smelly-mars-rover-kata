import type { Rover } from 'src/rover.ts';

export class Plateau {
    private rovers: Rover[] = [];

    public addRover(rover: Rover): boolean {
        this.rovers.push(rover);
        return true;
    }
}
