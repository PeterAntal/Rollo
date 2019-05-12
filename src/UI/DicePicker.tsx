import React from 'react';

import { DiceFactory, DiceKinds, Dice, DiceOf } from "../DiceModel/index";
import {
    ComboBox,
    IComboBoxOption,
    Button
} from 'office-ui-fabric-react/lib/index';




export interface DiceComboProps {
    diceKinds: DiceKinds;
    selected?: Dice | undefined;
}

export class DiceCombo extends React.Component<DiceComboProps> {

    public render(): JSX.Element {
        const diceOptions = this.renderDiceOptions();
        return <ComboBox
            options={diceOptions}
            selectedKey={this.props.selected && this.props.selected.getKey()}
        />
            ;
    }
    private renderDiceOptions(): IComboBoxOption[] {
        const results = [];
        for (const key in this.props.diceKinds) {
            if (this.props.diceKinds.hasOwnProperty(key)) {
                results.push({
                    key: key,
                    text: key
                });
            }
        }
        return results;
    }
}

export interface DicePickerProps {
    onAdd(dice: DiceOf<any>): void;
}
interface DicePickerState {
    dice: DiceKinds;
    selected?: DiceOf<any>;
}

export class DicePicker extends React.Component<DicePickerProps, DicePickerState> {
    constructor(props: Readonly<any>) {
        super(props);
        const dice = DiceFactory.getInstance().getDice();
        this.state = {
            dice: dice,
            selected: dice[Object.keys(dice)[0]]
        };
    }

    public render(): JSX.Element {
        return <div className="flex-horizontal">
            <DiceCombo
                diceKinds={this.state.dice}
                selected={this.state.selected}
            />
            <Button
                label="AddButton"
                text="Add"
                onClick={this.onClick}
                disabled={this.state.selected == null}
            />
        </div>
            ;
    }

    public onClick = (): void => {
        this.props.onAdd(this.state.selected!);
    }
}