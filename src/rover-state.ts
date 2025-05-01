import { directionValues, isDirection, type Direction } from 'src/direction.ts';
import { Position } from 'src/position.ts';

export class RoverState {
    private readonly position: Position;
    private direction: Direction;

    constructor(x = 0, y = 0, direction: Direction = 'N') {
        this.position = new Position(x, y);
        this.direction = direction;
    }

    public static fromString(state: string): RoverState {
        const stateParameters = state.split(' ');
        if (stateParameters.length < 3) {
            return new RoverState();
        }

        const x = parseInt(stateParameters[0], 10);
        const y = parseInt(stateParameters[1], 10);

        const direction = stateParameters[2];
        if (!isDirection(direction)) {
            return new RoverState(x, y, 'N');
        }

        return new RoverState(x, y, direction);
    }

    public turnLeft() {
        this.rotate(-1);
    }

    public turnRight() {
        this.rotate(1);
    }

    public moveForward() {
        this.position.moveForward(this.direction);
    }

    public toString(): string {
        return `${this.position.toString()} ${this.direction}`;
    }

    private rotate(rotation: number) {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(this.direction);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        this.direction = directionValues[newIndex];
    }
}
