import { RoverState } from 'src/rover-state.ts';
import type { Plateau } from 'src/plateau.ts';

export class Rover {
    private state: RoverState | undefined = undefined;

    public land(plateau: Plateau, position: string): boolean {
        this.state = RoverState.fromString(position);
        return plateau.addRover(this);
    }

    public go(commandSequence: string): boolean {
        if (!this.state) return false;

        const commands = commandSequence.split('');
        for (const command of commands) {
            this.handleCommand(command);
        }

        return true;
    }

    private handleCommand(command: string): void {
        if (command === 'L') {
            this.state?.turnLeft();
        }
        if (command === 'R') {
            this.state?.turnRight();
        }
        if (command === 'M') {
            this.state?.moveForward();
        }
    }

    public hasSamePositionAs(other: Rover): boolean {
        if (!this.state) return false;

        return this.state.hasSamePosition(other.state);
    }

    public reportPosition(): string {
        if (!this.state) return '';

        return this.state.toString();
    }
}
