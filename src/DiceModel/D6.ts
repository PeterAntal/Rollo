import { NumericDice } from "./DiceBase";

export class D6 extends NumericDice {
    getKey(): string {
        return "D6";
    }

    getName(): string {
        return "Six Sided Die";
    }

    getFaceCount(): number {
        return 6;
    }
}
