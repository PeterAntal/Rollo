import React from "react";
import { DiceOf } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { DiceResult } from "./DiceResult";

interface DiceRollProps {
    activeDice: DiceOf<any>[];
    randomSeed: RandomSeed;
}
export class DiceRoll extends React.Component<DiceRollProps> {
    public render(): JSX.Element {
        const content: JSX.Element[] = [];
        this.props.activeDice.forEach((dice, index) => {
            content.push(
                <DiceResult content={this.rollDice(dice)} key={index} />
            );
        });
        return <div className="dice-roll flex-row">{content}</div>;
    }

    private rollDice(dice: DiceOf<any>): string {
        const options = dice.getSides();
        const selection = this.props.randomSeed.range(options.length);
        return options[selection];
    }
}
