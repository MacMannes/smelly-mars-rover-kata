import type { Rover } from 'src/rover.ts';

export class Plateau {
    private rovers: Rover[] = [];

    public addRover(rover: Rover): boolean {
        if (!this.canLandRover(rover)) {
            return false;
        }

        this.rovers.push(rover);
        return true;
    }

    private canLandRover(rover: Rover): boolean {
        return !this.rovers.some((existingRover) =>
            existingRover.hasSamePosition(rover),
        );
    }
}
