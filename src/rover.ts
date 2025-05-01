import { RoverState } from 'src/rover-state.ts';

export class Rover {
    private readonly state: RoverState = new RoverState();

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
                this.turnLeft(this.state.direction);
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

    private turnLeft(direction: string): void {
        if (direction === 'E') {
            direction = 'N';
        } else if (direction === 'N') {
            direction = 'W';
        } else if (direction === 'W') {
            direction = 'S';
        } else if (direction === 'S') {
            direction = 'E';
        }
    }

    public reportPosition(): string {
        return `${this.state.x} ${this.state.y} ${this.state.direction}`;
    }
}
