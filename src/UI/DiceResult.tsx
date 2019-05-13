import React from "react";
import "./DiceResult.css";

interface DiceResultProps {
    content: string;
}
export class DiceResult extends React.Component<DiceResultProps> {
    public render(): JSX.Element {
        return <div className="dice-result">{this.props.content}</div>;
    }
}
