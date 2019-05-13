import { DiceBase } from "./DiceBase";

export class D10 extends DiceBase<number> {
    getKey(): string {
        return "D10";
    }

    getName(): string {
        return "Ten Sided Die";
    }

    getSides(): number[] {
        const set = [];
        for (let i = 1; i < 100; i++) {
            set.push(i);
        }
        return set;
    }
}
