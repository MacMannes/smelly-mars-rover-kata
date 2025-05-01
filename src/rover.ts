import { RoverState } from 'src/rover-state.ts';

export class Rover {
    private state: RoverState = new RoverState();

    constructor(initalState: string) {
        const stateParameters = initalState.split(' ');
        if (stateParameters.length >= 3) {
            this.state.x = parseInt(stateParameters[0], 10);
            this.state.y = parseInt(stateParameters[1], 10);
            this.state.direction = stateParameters[2][0];
        }
    }

    public go(commandSequence: string): void {
        const commands = commandSequence.split('');
        for (const command of commands) {
            if (command === 'L') {
                if (this.state.direction === 'E') {
                    this.state.direction = 'N';
                } else if (this.state.direction === 'N') {
                    this.state.direction = 'W';
                } else if (this.state.direction === 'W') {
                    this.state.direction = 'S';
                } else if (this.state.direction === 'S') {
                    this.state.direction = 'E';
                }
            } else if (command === 'R') {
                if (this.state.direction === 'E') {
                    this.state.direction = 'S';
                } else if (this.state.direction === 'S') {
                    this.state.direction = 'W';
                } else if (this.state.direction === 'W') {
                    this.state.direction = 'N';
                } else if (this.state.direction === 'N') {
                    this.state.direction = 'E';
                }
            } else if (command === 'M') {
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
        }
    }

    public reportPosition(): string {
        return `${this.state.x} ${this.state.y} ${this.state.direction}`;
    }
}
