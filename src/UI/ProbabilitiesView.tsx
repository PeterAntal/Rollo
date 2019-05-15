import React from "react";
import { Dice, Face } from "../DiceModel/index";
import { RandomSeed } from "random-seed";
import { HistogramChart } from "./HistogramChart";

interface ProbabilitiesViewProps {
    activeDice: Dice[];
    randomSeed: RandomSeed;
    iterations: number;
}
export interface Histogram {
    name: string;
    data: number[];
}

interface RollOutcome {
    rollOutCome: Face[];
}

interface ProbabilitiesViewState {
    iterations: RollOutcome[];
    histograms: Histogram[];
}

export class ProbabilitiesView extends React.Component<
    ProbabilitiesViewProps,
    ProbabilitiesViewState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            iterations: [],
            histograms: [{ name: "number", data: [] }],
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
            const rollOutCome = this.generateRoll();
            iterations[index] = {
                rollOutCome: rollOutCome,
            };
        }

        const dimensions = this.getDimensions(iterations);
        const histograms = this.getHistograms(iterations, dimensions);

        this.setState({
            iterations: iterations,
            histograms: histograms,
        });
    }

    private getDimensions(iterations: RollOutcome[]): string[] {
        const dimensions: string[] = [];
        for (let iteration = 0; iteration < iterations.length; iteration++) {
            const outcomeFaces = iterations[iteration].rollOutCome;
            for (let face = 0; face < outcomeFaces.length; face++) {
                for (const key in outcomeFaces[face]) {
                    if (outcomeFaces[face].hasOwnProperty(key)) {
                        if (dimensions.indexOf(key) === -1) {
                            dimensions.push(key);
                        }
                    }
                }
            }
        }

        return dimensions;
    }

    private getHistograms(
        outcomes: RollOutcome[],
        dimensions: string[]
    ): Histogram[] {
        const histograms = [];
        for (let dimension = 0; dimension < dimensions.length; dimension++) {
            const dimensionName = dimensions[dimension];
            histograms.push({
                name: dimensionName,
                data: this.getHistogram(outcomes, dimensionName),
            });
        }
        return histograms;
    }

    private getHistogram(
        iterations: RollOutcome[],
        dimension: string
    ): number[] {
        let histogram: number[] = [];

        for (let index = 0; index < iterations.length; index++) {
            const diceRolls = iterations[index].rollOutCome;
            let iterationTotal = 0;

            for (let face = 0; face < diceRolls.length; face++) {
                const result = diceRolls[face][dimension];
                if (result != null) {
                    iterationTotal += result != null ? result : 0;
                }
            }

            if (histogram[iterationTotal] == null) {
                histogram[iterationTotal] = 1;
            } else {
                histogram[iterationTotal]++;
            }
        }
        return histogram;
    }

    private generateRoll(): Face[] {
        const rolls: any[] = [];
        this.props.activeDice.forEach((item, index) => {
            rolls.push(item.roll(this.props.randomSeed));
        });
        return rolls;
    }
}
