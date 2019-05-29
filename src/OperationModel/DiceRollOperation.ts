import { OperationFactory } from "./OperationFactory";
import { Dice } from "../DiceModel/index";
import { DiceFactory } from "../DiceModel/index";
import {
    Histogram,
    RollOutcome,
    generateRoll,
    getDimensions,
    getHistograms,
} from "../DiceModel/RollingModel";
import { CacheableOperation, OperationResultCache } from "./ResultCache";
import { create } from "random-seed";

export interface DiceRollOutcome {
    dimensions: string[];
    histograms: Histogram[];
    rollOutComes: RollOutcome[];
}

export interface DiceRollParams {
    diceKinds: string[];
    iterationsCount: number;
    randomSeed: string;
}

export class DiceRollOperation
    implements CacheableOperation<DiceRollOutcome, DiceRollParams> {
    private params: DiceRollParams;
    public static Name = "DiceRollOperation";

    public constructor(params: DiceRollParams) {
        this.params = params;
    }

    public getKey() {
        return this.getType() + JSON.stringify(this.getParams());
    }
    public getType(): string {
        return DiceRollOperation.Name;
    }

    public getParams(): DiceRollParams {
        return this.params;
    }

    async runOperation(
        queryResultCache: OperationResultCache
    ): Promise<DiceRollOutcome> {
        const rollOutcomes: RollOutcome[] = [];

        const randomSeed = create(this.params.randomSeed);
        const dice: Dice[] = [];
        const diceKinds = DiceFactory.getInstance().getDice();
        if (this.params.diceKinds.length > 0) {
            for (let index = 0; index < this.params.diceKinds.length; index++) {
                dice.push(diceKinds[this.params.diceKinds[index]]);
            }
            for (let index = 0; index < this.params.iterationsCount; index++) {
                const rollOutCome = generateRoll(dice, randomSeed);
                rollOutcomes[index] = {
                    rollOutCome: rollOutCome,
                };
            }
        }

        const dimensions = getDimensions(rollOutcomes);
        const histograms = getHistograms(rollOutcomes, dimensions);
        return {
            dimensions: dimensions,
            histograms: histograms,
            rollOutComes: rollOutcomes,
        };
    }
}

OperationFactory.getInstance().RegisterConstructor(
    DiceRollOperation.Name,
    DiceRollOperation
);
