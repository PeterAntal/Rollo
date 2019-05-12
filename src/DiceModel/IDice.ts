export interface DiceConstructor<T> {
    new(): DiceOf<T>;
}

export interface Dice {
    getKey(): string;
    getName(): string;
}

export interface DiceOf<T> extends Dice {
    getSides(): T[];
}

export interface DiceKinds { [key: string]: DiceOf<any> }