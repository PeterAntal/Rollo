import { DiceConstructor, DiceKinds } from "./IDice";


export class DiceFactory {
    private static instance: DiceFactory;
    private diceKinds: DiceKinds;

    private constructor() {
        this.diceKinds = {};
    }

    static getInstance(): DiceFactory {
        if (!DiceFactory.instance) {
            DiceFactory.instance = new DiceFactory();
        }
        return DiceFactory.instance;
    }

    public getDice(): DiceKinds {
        return this.diceKinds;
    }

    public RegisterDice(constructor: DiceConstructor<any>) {
        const dice = new constructor();
        this.diceKinds[dice.getKey()] = dice;
    }
}