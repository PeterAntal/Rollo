import { Face } from "./IDice";
import { DiceBase } from "./DiceBase";

export class SWRPG_Difficulty extends DiceBase {
    getKey(): string {
        return "SWRPG_Difficulty";
    }

    getName(): string {
        return "SWRPG_Difficulty";
    }

    public getBackgroundColor(): string {
        return "purple";
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

export class SWRPG_Ability extends DiceBase {
    getKey(): string {
        return "SWRPG_Ability";
    }

    getName(): string {
        return "SWRPG - Ability";
    }

    public getBackgroundColor(): string {
        return "green";
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

export class SWRPG_Proficiency extends DiceBase {
    getKey(): string {
        return "SWRPG_Proficiency";
    }

    getName(): string {
        return "SWRPG - Proficiency";
    }

    public getBackgroundColor(): string {
        return "yellow";
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

export class SWRPG_Challenge extends DiceBase {
    getKey(): string {
        return "SWRPG_Challenge";
    }

    getName(): string {
        return "SWRPG - Challenge";
    }

    public getBackgroundColor(): string {
        return "red";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                advantage: -2,
            },
            {
                advantage: -1,
            },
            {
                advantage: -2,
            },
            {
                advantage: -1,
            },
            {
                success: -1,
                advantage: -1,
            },
            {
                success: -1,
            },
            {
                success: -1,
                advantage: -1,
            },
            {
                success: -1,
            },
            {
                success: -2,
            },
            {
                despair: 1,
            },
            {
                success: -2,
            },
            {},
        ];
        return set;
    }
}

export class SWRPG_Force extends DiceBase {
    getKey(): string {
        return "SWRPG_Force";
    }

    getName(): string {
        return "SWRPG - Force";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                force: -1,
            },
            {
                force: 2,
            },
            {
                force: -1,
            },
            {
                force: 2,
            },
            {
                force: -1,
            },
            {
                force: 2,
            },
            {
                force: -1,
            },
            {
                force: 1,
            },
            {
                force: -1,
            },
            {
                force: 2,
            },
            {
                force: -1,
            },
            {
                force: -2,
            },
        ];
        return set;
    }
}

export class SWRPG_Setback extends DiceBase {
    getKey(): string {
        return "SWRPG_Setback";
    }

    getName(): string {
        return "SWRPG_Setback";
    }

    public getBackgroundColor(): string {
        return "black";
    }

    public getForegroundColor(): string {
        return "white";
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
                success: -1,
            },
            {
                success: -1,
            },
            {},
            {},
        ];
        return set;
    }
}

export class SWRPG_Boost extends DiceBase {
    getKey(): string {
        return "SWRPG_Boost";
    }

    getName(): string {
        return "SWRPG_Boost";
    }

    public getBackgroundColor(): string {
        return "blue";
    }

    public getSides(): Face[] {
        const set: Face[] = [
            {
                advantage: 1,
                success: 1,
            },
            {
                advantage: 1,
            },
            {
                advantage: 2,
            },
            {
                success: 1,
            },
            {},
            {},
        ];
        return set;
    }
}
