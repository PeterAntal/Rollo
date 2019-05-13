import { NumericDice } from "./DiceBase";

export class D20 extends NumericDice {
    getKey(): string {
        return "D20";
    }

    getName(): string {
        return "Twenty Sided Die";
    }

    getFaceCount(): number {
        return 20;
    }
}
