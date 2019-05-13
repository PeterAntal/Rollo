import React from "react";
import { Dice, Face } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { DiceResult } from "./DiceResult";
import "./DiceRoll.css";

interface DiceRollProps {
    activeDice: Dice[];
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

    private rollDice(dice: Dice): Face {
        const options = dice.getSides();
        const selection = this.props.randomSeed.range(options.length);
        return options[selection];
    }
}
