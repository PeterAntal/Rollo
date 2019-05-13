import React from "react";
import { Dice } from "../DiceModel/index";
import { IconButton, getTheme } from "office-ui-fabric-react/lib/index";

interface DiceComponentProps {
    dice: Dice;
    index: number;
    remove: (index: number) => void;
}

export class DiceComponent extends React.Component<DiceComponentProps> {
    public render(): JSX.Element {
        const theme = getTheme();
        return (
            <div className="dice-component">
                {this.props.dice.getName()}
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
                        iconName: "Delete",
                    }}
                />
            </div>
        );
    }
    private onClick = (): void => {
        this.props.remove(this.props.index);
    };
}
