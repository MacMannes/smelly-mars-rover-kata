import { directionValues, type Direction } from 'src/direction.ts';

export class RoverState {
    x = 0;
    y = 0;
    direction: Direction = 'N';

    turnLeft(direction: Direction): Direction {
        return this.rotate(direction, -1);
    }

    turnRight(direction: Direction): Direction {
        return this.rotate(direction, 1);
    }

    moveForward() {
        if (this.direction === 'E') {
            this.x++;
        }
        if (this.direction === 'S') {
            this.y--;
        }
        if (this.direction === 'W') {
            this.x--;
        }
        if (this.direction === 'N') {
            this.y++;
        }
    }

    private rotate(direction: Direction, rotation: number): Direction {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(direction);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        return directionValues[newIndex];
    }
}
