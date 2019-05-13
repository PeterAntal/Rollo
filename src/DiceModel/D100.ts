import { DiceBase } from "./DiceBase";

export class D100 extends DiceBase<number> {
    getKey(): string {
        return "D100";
    }

    getName(): string {
        return "Hundred Sided Die";
    }

    getSides(): number[] {
        const set = [];
        for (let i = 1; i < 100; i++) {
            set.push(i);
        }
        return set;
    }
}
