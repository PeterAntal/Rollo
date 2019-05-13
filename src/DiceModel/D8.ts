import { NumericDice } from "./DiceBase";

export class D8 extends NumericDice {
    getKey(): string {
        return "D8";
    }

    getName(): string {
        return "Eight Sided Die";
    }

    getFaceCount(): number {
        return 8;
    }
}
