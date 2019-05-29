import React from "react";
import "./App.css";
import "./common.css";
import { View } from "./UI/View";

class App extends React.Component<any, any> {
    public render() {
        return (
            <div className="App">
                <View />
            </div>
        );
    }
}

export default App;
