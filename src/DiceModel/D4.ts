import { NumericDice } from "./DiceBase";

export class D4 extends NumericDice {
    getKey(): string {
        return "D4";
    }

    getName(): string {
        return "Four Sided Die";
    }

    getFaceCount(): number {
        return 4;
    }
}
