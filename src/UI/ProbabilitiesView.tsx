import React from "react";
import { DiceOf } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { PrimaryButton } from "office-ui-fabric-react";
import { HistogramChart } from "./HistogramChart";

interface ProbabilitiesViewProps {
    activeDice: DiceOf<any>[];
    randomSeed: RandomSeed;
    iterations: number;
}
interface RollOutcome {
    rollOutCome: number[];
    summary: number;
}

interface ProbabilitiesViewState {
    iterations: RollOutcome[];
    histogram: number[];
}

export class ProbabilitiesView extends React.Component<
    ProbabilitiesViewProps,
    ProbabilitiesViewState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            iterations: [],
            histogram: [],
        };
    }

    public componentDidMount() {
        this.regenerate();
    }

    public componentDidUpdate(newProps: ProbabilitiesViewProps) {
        if (newProps !== this.props) {
            this.regenerate();
        }
    }

    public render(): JSX.Element {
        return (
            <>
                {this.state.histogram && (
                    <HistogramChart
                        items={this.state.histogram}
                        iterations={this.props.iterations}
                    />
                )}
                <PrimaryButton onClick={this.onClick} text="Generate" />
            </>
        );
    }

    private rollDice(dice: DiceOf<any>): JSX.Element {
        const options = dice.getSides();
        const selection = this.props.randomSeed(options.length);
        return options[selection];
    }

    private onClick = (): void => {
        this.regenerate();
    };

    private regenerate() {
        const iterations = [];
        for (let index = 0; index < this.props.iterations; index++) {
            const rollOutCome = this.generateRoll();
            iterations[index] = {
                rollOutCome: rollOutCome,
                summary: this.summarize(rollOutCome),
            };
        }

        this.setState({
            iterations: iterations,
            histogram: this.bucketize(iterations),
        });
    }

    private bucketize(iterations: RollOutcome[]): number[] {
        let histogram: number[] = [];
        for (let index = 0; index < iterations.length; index++) {
            const symbol = iterations[index].summary;

            if (histogram[symbol] == null) {
                histogram[symbol] = 1;
            } else {
                histogram[symbol]++;
            }
        }

        return histogram;
    }

    private summarize(outcome: number[]): number {
        let total = 0;
        for (let index = 0; index < outcome.length; index++) {
            total += outcome[index];
        }
        return total;
    }

    private generateRoll(): any[] {
        const rolls: any[] = [];
        this.props.activeDice.forEach((item, index) => {
            rolls.push(item.roll(this.props.randomSeed));
        });
        return rolls;
    }
}
