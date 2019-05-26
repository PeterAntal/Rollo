import React from "react";
import { Face, Dice } from "../DiceModel/IDice";
import { mapGlyph } from "../DiceModel/DieGlyphs";
import "./DiceResult.css";
import { css } from "@uifabric/utilities";
import { IconButton } from "office-ui-fabric-react/lib/index";

interface DiceResultProps {
    id: number;
    dice: Dice;
    face: Face;
    onClick: (id: number) => void;
}
/** Renders a set of glyphs associated with a given face on a  dice */
export class DiceResult extends React.Component<DiceResultProps> {
    public render(): JSX.Element {
        return (
            <IconButton className="dice-button" onClick={this.onClick}>
                <div
                    className={css(this.props.dice.getShape(), "dice-result")}
                    style={{
                        fontKerning: "auto",
                        "--fore-color": this.props.dice.getForegroundColor(),
                        "--back-color": this.props.dice.getBackgroundColor(),
                    }}
                >
                    {this.getGlyphs()}
                </div>
            </IconButton>
        );
    }
    private onClick = (): void => {
        if (this.props.onClick) this.props.onClick(this.props.id);
    };

    private getGlyphs(): JSX.Element[] {
        const results: JSX.Element[] = [];
        const itemCount = Object.keys(this.props.face).length;
        for (const key in this.props.face) {
            if (this.props.face.hasOwnProperty(key)) {
                const count = this.props.face[key];

                const faceSize =
                    itemCount === 1 && Math.abs(count) === 1
                        ? "large-face"
                        : "small-face";

                results.push(
                    <span key={key} className={css("value", faceSize)}>
                        {mapGlyph(key, count)}
                    </span>
                );
            }
        }

        if (itemCount === 0) {
            results.push(
                <span className={css("value", "no-items")}>{""} </span>
            );
        }
        return results;
    }
}
