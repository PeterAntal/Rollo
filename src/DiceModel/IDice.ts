export interface DiceConstructor<T> {
    new(): Dice<T>;
}

export interface Dice<T> {
    getSides(): T[];
}

export interface DiceKinds { [key: string]: DiceConstructor<any> }