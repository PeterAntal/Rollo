import { NumericDice } from "./DiceBase";

export class D100 extends NumericDice {
    getKey(): string {
        return "D100";
    }

    getName(): string {
        return "Hundred Sided Die";
    }

    getFaceCount(): number {
        return 100;
    }
}
