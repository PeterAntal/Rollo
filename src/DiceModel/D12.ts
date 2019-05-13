import { NumericDice } from "./DiceBase";

export class D12 extends NumericDice {
    getKey(): string {
        return "D12";
    }

    getName(): string {
        return "Twelve Sided Die";
    }

    getFaceCount(): number {
        return 12;
    }
}
