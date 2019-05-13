import React from "react";
import {
    DetailsList,
    DetailsListLayoutMode,
} from "office-ui-fabric-react/lib/DetailsList";

export interface HistogramTableProps {
    items: number[];
}
export class HistogramTable extends React.Component<HistogramTableProps> {
    public render(): JSX.Element {
        const items = [];
        for (let i = 0; i < this.props.items.length; i++) {
            items.push({
                key: i,
                name: "Roll " + i,
                value: this.props.items[i],
            });
        }
        const columns = [];
        return (
            <>
                <DetailsList
                    items={items}
                    layoutMode={DetailsListLayoutMode.fixedColumns}
                    columns={[
                        {
                            key: "column1",
                            name: "Name",
                            fieldName: "name",
                            minWidth: 100,
                            maxWidth: 200,
                            isResizable: true,
                        },
                        {
                            key: "column2",
                            name: "Count",
                            fieldName: "value",
                            minWidth: 100,
                            maxWidth: 200,
                            isResizable: true,
                        },
                    ]}
                />
            </>
        );
    }
}
