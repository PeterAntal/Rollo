import React from 'react'
import { Dice, DiceOf } from '../DiceModel/index'
import { DiceComponent } from './DiceComponent'

interface DicePoolProps {
    activeDice: Dice[]
    onRemove: (index: number) => void
}
export class DicePool extends React.Component<DicePoolProps> {
    public render(): JSX.Element {
        const content: JSX.Element[] = []
        this.props.activeDice.forEach((item, index) => {
            content.push(
                <DiceComponent
                    dice={item as DiceOf<any>}
                    key={index}
                    index={index}
                    remove={this.props.onRemove}
                />
            )
        })
        return <> {content}</>
    }
}
