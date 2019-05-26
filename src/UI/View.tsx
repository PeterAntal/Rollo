import React from "react";
import { DicePicker } from "./DicePicker";
import { Dice } from "../DiceModel/index";
import { DiceRoll } from "./DiceRoll";
import { ProbabilitiesView } from "./ProbabilitiesView";
import { RandomSeed, create } from "random-seed";

interface ViewState {
    activeDice: Dice[];
    randomSeed: RandomSeed;
}
export class View extends React.Component<any, ViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeDice: [],
            randomSeed: create("0"),
        };
    }

    public render(): JSX.Element {
        return (
            <>
                <DicePicker onAdd={this.onAddDice} />
                <DiceRoll
                    activeDice={this.state.activeDice as any}
                    randomSeed={this.state.randomSeed}
                    onRemove={this.onRemoveDice}
                />
                <ProbabilitiesView
                    activeDice={this.state.activeDice as any}
                    randomSeed={this.state.randomSeed}
                    iterations={50000}
                />
            </>
        );
    }

    public onAddDice = (dice: Dice): void => {
        this.state.activeDice.push(dice);
        this.setState({ activeDice: this.state.activeDice });
    };

    public onRemoveDice = (index: number): void => {
        this.state.activeDice.splice(index, 1);
        this.setState({ activeDice: this.state.activeDice });
    };
}
