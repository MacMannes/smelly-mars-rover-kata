import { RoverState } from 'src/rover-state.ts';
import { isDirection, type Direction } from 'src/direction.ts';

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
            this.handleCommand(command);
        }
    }

    private handleCommand(command: string) {
        if (command === 'L') {
            this.state.direction = this.turnLeft(this.state.direction);
            return;
        }
        if (command === 'R') {
            this.state.direction = this.turnRight(this.state.direction);
            return;
        }
        if (command === 'M') {
            this.moveForward();
            return;
        }
    }

    private turnLeft(direction: Direction): Direction {
        return this.state.turnLeft(direction);
    }

    private turnRight(direction: Direction): Direction {
        return this.state.turnRight(direction);
    }

    private moveForward() {
        this.state.moveForward();
    }

    public reportPosition(): string {
        return `${this.state.x} ${this.state.y} ${this.state.direction}`;
    }
}
