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
                value: 0,
            },
            {
                value: 1,
            },
        ];
        return set;
    }
}
