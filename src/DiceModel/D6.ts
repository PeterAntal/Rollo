import { DiceBase } from "./DiceBase";

export class D6 extends DiceBase<number> {
    getKey(): string {
        return "D6";
    }

    getName(): string {
        return "Six Sided Die";
    }

    getSides(): number[] {
        return [1, 2, 3, 4, 5, 6];
    }
}
