import React from 'react';

import { DiceFactory, DiceKinds } from "../DiceModel/index";


interface DiceChooserState {
    dice: DiceKinds;
}

export class DiceChooser extends React.Component<any, DiceChooserState> {
    constructor(props: Readonly<any>) {
        super(props);
        this.state = { dice: DiceFactory.getInstance().getDice() };
    }

    public render(): JSX.Element {
        const diceOptions = this.renderDiceOptions();
        return <div className="diceChooser">
            {this.renderDiceOptions()}
        </div>;
    }
    private renderDiceOptions(): string[] {
        const results = [];
        for (const key in this.state.dice) {
            if (this.state.dice.hasOwnProperty(key)) {
                results.push(key);
            }
        }
        return results;
    }
}