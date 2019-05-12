import React from 'react'
import { DiceOf } from '../DiceModel/index'
import { IconButton, getTheme } from 'office-ui-fabric-react/lib/index'

interface DiceComponentProps {
    dice: DiceOf<any>
    index: number
    remove: (index: number) => void
}

export class DiceComponent extends React.Component<DiceComponentProps> {
    public render(): JSX.Element {
        const theme = getTheme()
        return (
            <div>
                {this.props.dice.getName()}
                {this.props.dice.getSides()}
                <IconButton
                    text="Remove"
                    onClick={this.onClick}
                    styles={{
                        root: {
                            color: theme.palette.blue,
                            background: theme.palette.whiteTranslucent40,
                        },
                        rootHovered: {
                            color: theme.palette.white,
                            background: theme.palette.themeDarkAlt,
                        },
                    }}
                    iconProps={{
                        iconName: 'Delete',
                    }}
                />
            </div>
        )
    }
    private onClick = (): void => {
        this.props.remove(this.props.index)
    }
}
