const directionValues = ['N', 'E', 'S', 'W'] as const;
type DirectionType = (typeof directionValues)[number];

const CLOCKWISE = 1;
const COUNTER_CLOCKWISE = -1;

export class Direction {
    private type: DirectionType;

    constructor(direction = 'N') {
        if (this.isDirectionType(direction)) {
            this.type = direction;
            return;
        }

        this.type = 'N';
    }

    public turnLeft() {
        this.rotate(COUNTER_CLOCKWISE);
    }

    public turnRight() {
        this.rotate(CLOCKWISE);
    }

    public equals(other: unknown): boolean {
        if (other instanceof Direction) {
            return this.type === other.type;
        }
        if (typeof other === 'string') {
            return this.type === other;
        }
        return false;
    }

    public toString(): string {
        return this.type;
    }

    private rotate(rotation: number) {
        const arrayLength = directionValues.length;
        const currentIndex = directionValues.indexOf(this.type);
        const newIndex = (currentIndex + rotation + arrayLength) % arrayLength;
        this.type = directionValues[newIndex];
    }

    private isDirectionType(value: unknown): value is DirectionType {
        return directionValues.includes(value as DirectionType);
    }
}
