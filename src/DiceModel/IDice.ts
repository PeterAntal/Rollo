import { RandomSeed } from "random-seed";

export interface DiceConstructor<T> {
    new (): Dice;
}

export interface Face {
    [kind: string]: number;
}

export interface Dice {
    getKey(): string;
    getName(): string;
    getSides(): Face[];
    roll(randomSeed: RandomSeed): Face;
}

export interface DiceKinds {
    [key: string]: Dice;
}
