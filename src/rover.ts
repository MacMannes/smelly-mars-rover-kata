import { RoverState } from 'src/rover-state.ts';
import { directionValues, isDirection, type Direction } from 'src/direction.ts';

export class Rover {
    private readonly state: RoverState = new RoverState();

    constructor(initalState: string) {
        const stateParameters = initalState.split(' ');
        if (stateParameters.length >= 3) {
            this.state.x = parseInt(stateParameters[0], 10);
            this.state.y = parseInt(stateParameters[1], 10);
            const direction = stateParameters[2];
            if (!isDirection(direction)) {
                this.state.direction = 'N';
                return;
            }

            this.state.direction = direction;
        }
    }

    public go(commandSequence: string): void {
        const commands = commandSequence.split('');
        for (const command of commands) {
            if (command === 'L') {
                this.state.direction = this.turnLeft(this.state.direction);
            } else if (command === 'R') {
                this.state.direction = this.turnRight(this.state.direction);
            } else if (command === 'M') {
                this.moveForward();
            }
        }
    }

    private turnLeft(direction: Direction): Direction {
        return this.rotate(direction, -1);
    }

    private turnRight(direction: Direction): Direction {
        return this.rotate(direction, 1);
    }

    private rotate(direction: Direction, rotation: number): Direction {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(direction);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        return directionValues[newIndex];
    }

    private moveForward() {
        if (this.state.direction === 'E') {
            this.state.x++;
        }
        if (this.state.direction === 'S') {
            this.state.y--;
        }
        if (this.state.direction === 'W') {
            this.state.x--;
        }
        if (this.state.direction === 'N') {
            this.state.y++;
        }
    }

    public reportPosition(): string {
        return `${this.state.x} ${this.state.y} ${this.state.direction}`;
    }
}
