import { Bar } from "react-chartjs-2";
import React from "react";

export interface HistogramChartProps {
    items: number[];
    iterations: number;
}
export class HistogramChart extends React.Component<HistogramChartProps> {
    public render(): JSX.Element {
        const labels = [];
        const datasets = [];
        const values: number[] = [];
        const accum: number[] = [];

        let accumulator = 0;

        const keys = Object.keys(this.props.items).sort((a, b) => {
            return parseInt(a) - parseInt(b);
        });
        for (const i of keys) {
            labels.push(i + "");
            const j = parseInt(i);
            const value =
                this.props.items[j] != null
                    ? this.props.items[j] / this.props.iterations
                    : 0;
            accumulator += value;
            values.push(value);
            accum.push(accumulator);
        }

        datasets.push({
            label: "Probability",
            data: values,
            yAxisID: "A",
            backgroundColor: "rgb(200, 200, 255)",
            borderColor: "rgb(128, 128, 128)",
        });
        datasets.push({
            label: "CDF",
            data: accum,
            yAxisID: "B",
            type: "line",
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgb(128, 128, 128)",
        });
        const chartOptions = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        id: "A",
                        type: "linear",
                        position: "left",
                        ticks: {
                            min: 0,
                        },
                    },
                    {
                        id: "B",
                        type: "linear",
                        position: "right",
                        ticks: {
                            min: 0,
                        },
                    },
                ],
            },
        } as any;
        return (
            <div style={{ height: "250px" }}>
                <Bar
                    options={chartOptions}
                    data={{
                        labels: labels,
                        datasets: datasets,
                    }}
                />
            </div>
        );
    }
}
