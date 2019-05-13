import { Face } from "./IDice";
import { DiceBase } from "./DiceBase";

export class D2 extends DiceBase {
    getKey(): string {
        return "D2";
    }

    getName(): string {
        return "Coin";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                number: 0,
            },
            {
                number: 1,
            },
        ];
        return set;
    }
}
