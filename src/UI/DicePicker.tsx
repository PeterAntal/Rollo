import React from "react";

import { DiceFactory, DiceKinds, Dice } from "../DiceModel/index";
import {
    ComboBox,
    IComboBox,
    IComboBoxOption,
    PrimaryButton,
} from "office-ui-fabric-react/lib/index";

export interface DiceComboProps {
    diceKinds: DiceKinds;
    selected?: Dice | undefined;
    onSelect: (dice: Dice) => void;
}

export class DiceCombo extends React.Component<DiceComboProps> {
    public render(): JSX.Element {
        const diceOptions = this.renderDiceOptions();
        return (
            <ComboBox
                options={diceOptions}
                selectedKey={
                    this.props.selected && this.props.selected.getKey()
                }
                onChange={this.onChange}
            />
        );
    }
    private renderDiceOptions(): IComboBoxOption[] {
        const results = [];
        for (const key in this.props.diceKinds) {
            if (this.props.diceKinds.hasOwnProperty(key)) {
                results.push({
                    key: key,
                    text: this.props.diceKinds[key].getName(),
                });
            }
        }
        return results;
    }

    private onChange = (
        event: React.FormEvent<IComboBox>,
        option?: IComboBoxOption,
        index?: number,
        value?: string
    ): void => {
        this.props.onSelect(this.props.diceKinds[option!.key!]);
    };
}

export interface DicePickerProps {
    onAdd(dice: Dice): void;
}
interface DicePickerState {
    dice: DiceKinds;
    selected?: Dice;
}

export class DicePicker extends React.Component<
    DicePickerProps,
    DicePickerState
> {
    constructor(props: Readonly<any>) {
        super(props);
        const dice = DiceFactory.getInstance().getDice();
        this.state = {
            dice: dice,
            selected: dice[Object.keys(dice)[0]],
        };
    }

    public render(): JSX.Element {
        return (
            <div className="flex-horizontal">
                <DiceCombo
                    diceKinds={this.state.dice}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                />
                <PrimaryButton
                    label="AddButton"
                    text="Add"
                    onClick={this.onClick}
                    disabled={this.state.selected == null}
                />
            </div>
        );
    }

    public onClick = (): void => {
        this.props.onAdd(this.state.selected!);
    };
    public onSelect = (dice: Dice): void => {
        this.setState({ selected: dice as any });
    };
}
