import { DiceOf } from "./IDice";

export class D6 implements DiceOf<number>{
    getKey(): string {
        return "D6";
    }

    getName(): string {
        return "Six Sided Die";
    }

    getSides(): number[] {
        return [1, 2, 3, 4, 5, 6];
    }
}