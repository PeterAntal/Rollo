import { DiceBase } from "./DiceBase";

export class D20 extends DiceBase<number> {
    getKey(): string {
        return "D20";
    }

    getName(): string {
        return "Twenty Sided Die";
    }

    getSides(): number[] {
        const set = [];
        for (let i = 1; i < 20; i++) {
            set.push(i);
        }
        return set;
    }
}
