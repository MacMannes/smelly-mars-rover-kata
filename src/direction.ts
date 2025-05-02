const directionValues = ['N', 'E', 'S', 'W'] as const;
type DirectionType = (typeof directionValues)[number];

export class Direction {
    private _direction: DirectionType;

    constructor(direction = 'N') {
        if (this.isDirectionType(direction)) {
            this._direction = direction;
            return;
        }

        this._direction = 'N';
    }

    public turnLeft() {
        this.rotate(-1);
    }

    public turnRight() {
        this.rotate(1);
    }

    public equals(other: unknown): boolean {
        if (other instanceof Direction) {
            return this._direction === other._direction;
        }
        if (typeof other === 'string') {
            return this._direction === other;
        }
        return false;
    }

    public toString(): string {
        return this._direction;
    }

    private rotate(rotation: number) {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(this._direction);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        this._direction = directionValues[newIndex];
    }

    private isDirectionType(value: unknown): value is DirectionType {
        return directionValues.includes(value as DirectionType);
    }
}
