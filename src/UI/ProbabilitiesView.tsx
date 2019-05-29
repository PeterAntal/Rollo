import React from "react";
import { Dice } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { HistogramChart } from "./HistogramChart";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { Histogram, RollOutcome } from "../DiceModel/RollingModel";
import {
    DiceRollOperation,
    DiceRollParams,
} from "../OperationModel/DiceRollOperation";
import { WorkClient } from "../WorkClient";

interface ProbabilitiesViewProps {
    activeDice: Dice[];
    randomSeed: RandomSeed;
    iterations: number;
}
interface ProbabilitiesViewState {
    rollOutcomes: RollOutcome[];
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
            rollOutcomes: [],
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

    private async regenerate() {
        const params: DiceRollParams = {
            diceKinds: this.props.activeDice.map(item => {
                return item.getKey();
            }),
            randomSeed: " 123",
            iterationsCount: this.props.iterations,
        };

        const client = WorkClient.getInstance();
        const result = await client.runOperation(new DiceRollOperation(params));

        this.setState({
            rollOutcomes: result.rollOutComes,
            histograms: result.histograms,
            regenerating: false,
        });
    }
}
