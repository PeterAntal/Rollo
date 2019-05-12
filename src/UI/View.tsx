import React from 'react'
import { DicePicker } from './DicePicker'
import { Dice } from '../DiceModel/index'
import { DicePool } from './DicePool'

interface ViewState {
    activeDice: Dice[]
}
export class View extends React.Component<any, ViewState> {
    constructor(props: any) {
        super(props)
        this.state = {
            activeDice: [],
        }
    }

    public render(): JSX.Element {
        return (
            <>
                <DicePicker onAdd={this.onAddDice} />
                <DicePool
                    activeDice={this.state.activeDice}
                    onRemove={this.onRemoveDice}
                />
            </>
        )
    }

    public onAddDice = (dice: Dice): void => {
        this.state.activeDice.push(dice)
        this.setState({ activeDice: this.state.activeDice })
    }

    public onRemoveDice = (index: number): void => {
        this.state.activeDice.splice(index, 1)
        this.setState({ activeDice: this.state.activeDice })
    }
}
