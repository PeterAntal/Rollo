import { Dice } from "./IDice";

export class D6 implements Dice<number>{
    getName(): string {
        return "Six Sided Die";
    }

    getSides(): number[] {
        return [1, 2, 3, 4, 5, 6];
    }
}