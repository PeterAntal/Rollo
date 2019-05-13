import { Dice, Face } from "./IDice";
import { RandomSeed } from "random-seed";

export abstract class DiceBase implements Dice {
    public abstract getKey(): string;
    public abstract getName(): string;
    public abstract getSides(): Face[];

    public roll(randomSeed: RandomSeed): Face {
        const options = this.getSides();
        const selection = randomSeed.range(options.length);
        return options[selection];
    }
}

export abstract class NumericDice extends DiceBase {
    public abstract getFaceCount(): number;

    public getSides(): Face[] {
        const set: Face[] = [];
        const max = this.getFaceCount();
        for (let i = 1; i <= max; i++) {
            const face = {
                value: i,
            } as Face;
            set.push(face);
        }
        return set;
    }

    public roll(randomSeed: RandomSeed): Face {
        const options = this.getSides();
        const selection = randomSeed.range(options.length);
        return options[selection];
    }
}
