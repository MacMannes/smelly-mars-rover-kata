export const directionValues = ['N', 'E', 'S', 'W'] as const;

export type DirectionType = (typeof directionValues)[number];

export function isDirectionType(value: unknown): value is DirectionType {
    return directionValues.includes(value as DirectionType);
}

export class Direction {
    private _direction: DirectionType;

    constructor(direction: string) {
        if (isDirectionType(direction)) {
            this._direction = direction;
            return;
        }

        this._direction = 'N';
    }
}
