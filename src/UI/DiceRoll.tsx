import React from "react";
import { Dice, Face } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { DiceResult } from "./DiceResult";
import { PrimaryButton } from "office-ui-fabric-react";
import { getGlyph } from "../DiceModel/DieGlyphs";
import "./DiceRoll.css";

import {
    RollOutcome,
    getValuesOfDimension,
    getDimensions,
} from "../DiceModel/RollingModel";

interface DiceRollProps {
    activeDice: Dice[];
    randomSeed: RandomSeed;
    onRemove: (index: number) => void;
}

export interface DiceRollState {
    faces: Face[];
}

export class DiceRoll extends React.Component<DiceRollProps, DiceRollState> {
    public constructor(props: DiceRollProps) {
        super(props);
        this.state = { faces: [] };
    }

    public componentWillReceiveProps(newProps: DiceRollProps) {
        if (newProps !== this.props) {
            this.rollFaces(newProps);
        }
    }

    public render(): JSX.Element {
        const content: JSX.Element[] = [];
        this.state.faces.forEach((face, index) => {
            content.push(
                <DiceResult
                    face={this.state.faces[index]}
                    dice={this.props.activeDice[index]}
                    key={index}
                    id={index}
                    onClick={this.props.onRemove}
                />
            );
        });
        return (
            <>
                <div className="dice-roll flex-row">{content}</div>
                {this.outcome()}

                {this.props.activeDice.length > 0 && (
                    <PrimaryButton onClick={this.onClick} text="Re-Roll" />
                )}
            </>
        );
    }

    private outcome(): JSX.Element {
        const outcome: RollOutcome = {
            rollOutCome: this.state.faces,
        };

        const dimensions = getDimensions([outcome]);
        const results = [];
        for (let dimension = 0; dimension < dimensions.length; dimension++) {
            const dimensionName = dimensions[dimension];
            const count = getValuesOfDimension(this.state.faces, dimensionName);
            results.push(
                <div>
                    <span>
                        {getGlyph(dimensionName, count)} {dimensionName}{" "}
                    </span>
                    <span>{count}</span>
                </div>
            );
        }
        return (
            <div>
                <br />
                Outcome Dimensions:{results}
                <br />
            </div>
        );
    }

    private onClick = (): void => {
        this.rollFaces(this.props);
    };

    private rollFaces(props: DiceRollProps): void {
        const faces: Face[] = [];
        props.activeDice.forEach((dice, index) => {
            faces.push(this.rollDice(dice));
        });
        this.setState({ faces: faces });
    }

    private rollDice(dice: Dice): Face {
        const options = dice.getSides();
        const selection = this.props.randomSeed.range(options.length);
        return options[selection];
    }
}
