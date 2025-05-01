import { RoverState } from 'src/rover-state.ts';

export class Rover {
    constructor(p: string) {
        const s = p.split(' ');
        if (s.length >= 3) {
            this.state.xx = parseInt(s[0], 10);
            this.state.yy = parseInt(s[1], 10);
            this.state.dd = s[2][0];
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

    public get XYD(): string {
        return `${this.state.xx} ${this.state.yy} ${this.state.dd}`;
    }

    public reportPosition(): string {
        return this.XYD;
    }

    private state: RoverState = new RoverState();
}
