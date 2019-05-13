import { DiceBase } from "./DiceBase";

export class D4 extends DiceBase<number> {
    getKey(): string {
        return "D4";
    }

    getName(): string {
        return "Four Sided Die";
    }

    getSides(): number[] {
        return [1, 2, 3, 4];
    }
}
