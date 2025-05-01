import type { Direction } from 'src/direction.ts';

export class Position {
    private x: number;
    private y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public moveForward(direction: Direction) {
        if (direction === 'E') {
            this.x++;
        }
        if (direction === 'S') {
            this.y--;
        }
        if (direction === 'W') {
            this.x--;
        }
        if (direction === 'N') {
            this.y++;
        }
    }

    public toString(): string {
        return `${this.x} ${this.y}`;
    }
}
