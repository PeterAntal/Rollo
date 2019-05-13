import React from "react";
import { Face } from "../DiceModel/IDice";
import { mapGlyph } from "../DiceModel/SWRPG-common";
import "./DiceResult.css";

interface DiceResultProps {
    content: Face;
}
export class DiceResult extends React.Component<DiceResultProps> {
    public render(): JSX.Element {
        const results = [];
        for (const key in this.props.content) {
            if (this.props.content.hasOwnProperty(key)) {
                const count = this.props.content[key];
                results.push(
                    <span key={key} className="value">
                        {mapGlyph(key, count)}
                    </span>
                );
            }
        }
        return <div className="dice-result">{results}</div>;
    }
}
