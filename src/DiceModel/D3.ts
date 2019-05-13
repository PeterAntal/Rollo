import { NumericDice } from "./DiceBase";

export class D3 extends NumericDice {
    getKey(): string {
        return "D3";
    }

    getName(): string {
        return "Three Sided Die";
    }

    getFaceCount(): number {
        return 3;
    }
}
