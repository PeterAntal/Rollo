import { DiceBase } from "./DiceBase";

export class D12 extends DiceBase<number> {
    getKey(): string {
        return "D12";
    }

    getName(): string {
        return "Twelve Sided Die";
    }

    getSides(): number[] {
        const set = [];
        for (let i = 1; i < 12; i++) {
            set.push(i);
        }
        return set;
    }
}
