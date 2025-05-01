import { RoverState } from 'src/rover-state.ts';

export class Rover {
    constructor(initalState: string) {
        const stateParameters = initalState.split(' ');
        if (stateParameters.length >= 3) {
            this.state.xx = parseInt(stateParameters[0], 10);
            this.state.yy = parseInt(stateParameters[1], 10);
            this.state.dd = stateParameters[2][0];
        }
    }

    public go(cms: string): void {
        const characters = cms.split('');
        for (const c of characters) {
            if (c === 'L') {
                if (this.state.dd === 'E') {
                    this.state.dd = 'N';
                } else if (this.state.dd === 'N') {
                    this.state.dd = 'W';
                } else if (this.state.dd === 'W') {
                    this.state.dd = 'S';
                } else if (this.state.dd === 'S') {
                    this.state.dd = 'E';
                }
            } else if (c === 'R') {
                if (this.state.dd === 'E') {
                    this.state.dd = 'S';
                } else if (this.state.dd === 'S') {
                    this.state.dd = 'W';
                } else if (this.state.dd === 'W') {
                    this.state.dd = 'N';
                } else if (this.state.dd === 'N') {
                    this.state.dd = 'E';
                }
            } else if (c === 'M') {
                if (this.state.dd === 'E') {
                    this.state.xx++;
                }
                if (this.state.dd === 'S') {
                    this.state.yy--;
                }
                if (this.state.dd === 'W') {
                    this.state.xx--;
                }
                if (this.state.dd === 'N') {
                    this.state.yy++;
                }
            }
        }
    }

    public reportPosition(): string {
        return `${this.state.xx} ${this.state.yy} ${this.state.dd}`;
    }

    private state: RoverState = new RoverState();
}
