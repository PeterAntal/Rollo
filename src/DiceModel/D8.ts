import { DiceBase } from "./DiceBase";

export class D8 extends DiceBase<number> {
    getKey(): string {
        return "D8";
    }

    getName(): string {
        return "Eight Sided Die";
    }

    getSides(): number[] {
        return [1, 2, 3, 4, 5, 6, 7, 8];
    }
}
