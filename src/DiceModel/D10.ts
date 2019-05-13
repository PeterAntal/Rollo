import { NumericDice } from "./DiceBase";

export class D10 extends NumericDice {
    getKey(): string {
        return "D10";
    }

    getName(): string {
        return "Ten Sided Die";
    }

    getFaceCount(): number {
        return 10;
    }
}
