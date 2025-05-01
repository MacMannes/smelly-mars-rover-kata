const directionValues = ['N', 'E', 'S', 'W'] as const;

export type Direction = (typeof directionValues)[number];

export function isDirection(value: unknown): value is Direction {
    return directionValues.includes(value as Direction);
}
