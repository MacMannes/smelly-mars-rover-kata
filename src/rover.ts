import { RoverState } from 'src/rover-state.ts';

export class Rover {
    private readonly state: RoverState;

    constructor(initalState: string) {
        this.state = RoverState.fromString(initalState);
    }

    public go(commandSequence: string): void {
        const commands = commandSequence.split('');
        for (const command of commands) {
            this.handleCommand(command);
        }
    }

    private handleCommand(command: string) {
        if (command === 'L') {
            this.state.turnLeft();
            return;
        }
        if (command === 'R') {
            this.state.turnRight();
            return;
        }
        if (command === 'M') {
            this.state.moveForward();
        }
    }

    public reportPosition(): string {
        return this.state.toString();
    }
}
