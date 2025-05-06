import type { Direction } from 'src/direction.ts';

export class Position {
    private x: number;
    private y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public moveForward(direction: Direction) {
        if (direction.equals('E')) {
            this.x++;
        }
        if (direction.equals('S')) {
            this.y--;
        }
        if (direction.equals('W')) {
            this.x--;
        }
        if (direction.equals('N')) {
            this.y++;
        }
    }

    public equals(posistion: Position): boolean {
        return this.x === posistion.x && this.y === posistion.y;
    }

    public toString(): string {
        return `${this.x} ${this.y}`;
    }
}
