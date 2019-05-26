import React from "react";
import { Dice } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { HistogramChart } from "./HistogramChart";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import {
    Histogram,
    RollOutcome,
    generateRoll,
    getDimensions,
    getHistograms,
} from "../DiceModel/RollingModel";

interface ProbabilitiesViewProps {
    activeDice: Dice[];
    randomSeed: RandomSeed;
    iterations: number;
}
interface ProbabilitiesViewState {
    iterations: RollOutcome[];
    histograms: Histogram[];
    regenerating: boolean;
}

export class ProbabilitiesView extends React.Component<
    ProbabilitiesViewProps,
    ProbabilitiesViewState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            iterations: [],
            histograms: [],
            regenerating: false,
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
        return <>{this.state.histograms && this.renderCharts()}</>;
    }

    private renderCharts(): JSX.Element[] {
        const elements: JSX.Element[] = [];

        if (this.state.regenerating) {
            elements.push(<Spinner key={0} />);
        }

        for (const key in this.state.histograms) {
            if (this.state.histograms.hasOwnProperty(key)) {
                const element = this.state.histograms[key];

                elements.push(
                    <div key={key}>
                        <span>{element.name}</span>
                        <HistogramChart
                            items={element.data}
                            iterations={this.props.iterations}
                        />
                    </div>
                );
            }
        }

        return elements;
    }

    private regenerate() {
        const iterations = [];
        for (let index = 0; index < this.props.iterations; index++) {
            const rollOutCome = generateRoll(
                this.props.activeDice,
                this.props.randomSeed
            );
            iterations[index] = {
                rollOutCome: rollOutCome,
            };
        }

        const dimensions = getDimensions(iterations);
        const histograms = getHistograms(iterations, dimensions);

        this.setState({
            iterations: iterations,
            histograms: histograms,
            regenerating: false,
        });
    }
}
