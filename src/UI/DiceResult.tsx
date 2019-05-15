import React from "react";
import { Face, Dice } from "../DiceModel/IDice";
import { mapGlyph } from "../DiceModel/SWRPG-common";
import "./DiceResult.css";

interface DiceResultProps {
    dice: Dice;
    face: Face;
}
/** Renders a set of glyphs associated with a given face on a  dice */
export class DiceResult extends React.Component<DiceResultProps> {
    public render(): JSX.Element {
        return (
            <div
                className="dice-result"
                style={{
                    backgroundColor: this.props.dice.getBackgroundColor(),
                    color: this.props.dice.getForegroundColor(),
                }}
            >
                {this.getGlyphs()}
            </div>
        );
    }

    private getGlyphs(): JSX.Element[] {
        const results: JSX.Element[] = [];
        for (const key in this.props.face) {
            if (this.props.face.hasOwnProperty(key)) {
                const count = this.props.face[key];
                results.push(
                    <span key={key} className="value">
                        {mapGlyph(key, count)}
                    </span>
                );
            }
        }
        return results;
    }
}
