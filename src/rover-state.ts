import { Direction } from 'src/direction.ts';
import { Position } from 'src/position.ts';

export class RoverState {
    private readonly position: Position;
    private readonly direction: Direction;

    private constructor(position: Position, direction: Direction) {
        this.position = position;
        this.direction = direction;
    }

    public static fromString(state: string): RoverState {
        const stateParameters = state.split(' ');
        if (stateParameters.length < 3) {
            return new RoverState(new Position(0, 0), new Direction());
        }

        const x = parseInt(stateParameters[0], 10);
        const y = parseInt(stateParameters[1], 10);
        const position = new Position(x, y);

        const direction = new Direction(stateParameters[2]);

        return new RoverState(position, direction);
    }

    public turnLeft() {
        this.direction.rotate(-1);
    }

    public turnRight() {
        this.direction.rotate(1);
    }

    public moveForward() {
        this.position.moveForward(this.direction.getType());
    }

    public toString(): string {
        return `${this.position} ${this.direction}`;
    }
}
