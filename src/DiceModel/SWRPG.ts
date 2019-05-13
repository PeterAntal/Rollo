import { Face } from "./IDice";
import { DiceBase } from "./DiceBase";
import * as SWRPG from "./SWRPG-common";

export class SWRPG_Purple extends DiceBase {
    getKey(): string {
        return "SWRPG_Purple";
    }

    getName(): string {
        return "SWRPG_Purple";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                disadvantage: 1,
            },
            {
                disadvantage: 1,
            },
            {
                disadvantage: 1,
            },
            {},
            {
                fail: 1,
            },
            {
                disadvantage: 1,
                fail: 1,
            },
            {
                disadvantage: 2,
            },
            {
                fail: 2,
            },
        ];
        return set;
    }
}
