import { DiceOf } from "./IDice";
import { RandomSeed } from "random-seed";

export abstract class DiceBase<T> implements DiceOf<T> {
    public abstract getKey(): string;
    public abstract getName(): string;
    public abstract getSides(): T[];

    public roll(randomSeed: RandomSeed): T {
        const options = this.getSides();
        const selection = randomSeed.range(options.length);
        return options[selection];
    }
}
