import { Face } from "./IDice";
import { DiceBase } from "./DiceBase";

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
                advantage: -1,
            },
            {
                advantage: -1,
            },
            {
                advantage: -1,
            },
            {},
            {
                success: -1,
            },
            {
                advantage: -1,
                success: -1,
            },
            {
                advantage: -2,
            },
            {
                success: -2,
            },
        ];
        return set;
    }
}

export class SWRPG_Green extends DiceBase {
    getKey(): string {
        return "SWRPG_Green";
    }

    getName(): string {
        return "SWRPG_Green";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                success: 1,
            },
            {
                advantage: 1,
            },
            {
                advantage: 1,
                success: 1,
            },
            {
                success: 2,
            },
            {
                advantage: 1,
            },
            {
                success: 1,
            },
            {
                advantage: 2,
            },
            {},
        ];
        return set;
    }
}

export class SWRPG_Yellow extends DiceBase {
    getKey(): string {
        return "SWRPG_Yellow";
    }

    getName(): string {
        return "SWRPG_Yellow";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                advantage: 2,
            },
            {
                advantage: 1,
            },
            {
                advantage: 2,
            },
            {
                triumph: 1,
            },
            {
                success: 1,
            },
            {
                success: 1,
                advantage: 1,
            },
            {
                success: 1,
            },
            {
                success: 1,
                advantage: 1,
            },
            {
                success: 2,
            },
            {
                success: 1,
                advantage: 1,
            },
            {
                success: 2,
            },
            {},
        ];
        return set;
    }
}
