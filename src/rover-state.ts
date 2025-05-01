import { directionValues, type Direction } from 'src/direction.ts';

export class RoverState {
    x = 0;
    y = 0;
    direction: Direction = 'N';

    turnLeft() {
        this.rotate(-1);
    }

    turnRight() {
        this.rotate(1);
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

    private rotate(rotation: number) {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(this.direction);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        this.direction = directionValues[newIndex];
    }
}
