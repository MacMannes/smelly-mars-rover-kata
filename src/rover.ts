import { RoverState } from 'src/rover-state.ts';
import type { Plateau } from 'src/plateau.ts';

export class Rover {
    private state: RoverState;

    constructor(initalState: string) {
        this.state = RoverState.fromString(initalState);
    }

    public land(plateau: Plateau, position: string): void {
        this.state = RoverState.fromString(position);
        plateau.addRover(this);
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
