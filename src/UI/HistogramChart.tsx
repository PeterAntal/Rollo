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
        const values = [];
        const accum = [];

        let accumulator = 0;

        for (let i = 0; i < this.props.items.length; i++) {
            labels.push(i + "");
            const value =
                this.props.items[i] != null
                    ? this.props.items[i] / this.props.iterations
                    : 0;
            accumulator += value;
            values.push(value);
            accum.push(accumulator);
        }

        datasets.push({
            label: "My First dataset",
            data: values,
            yAxisID: "A",
            backgroundColor: "rgb(200, 200, 255)",
            borderColor: "rgb(128, 128, 128)",
        });
        datasets.push({
            label: "My Second dataset",
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
                    },
                    {
                        id: "B",
                        type: "linear",
                        position: "right",
                    },
                ],
            },
        } as any;
        return (
            <div style={{ height: "500px" }}>
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
