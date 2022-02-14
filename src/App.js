import Hello from "./Components/Hello";
import React from "react";

function App() {
    const colors = ["red", "green", "blue", "pink", "black", "silver"];
    return (
        <React.Fragment>
            {
                colors.map(
                    function (color, index) {
                        return <Hello username={color} key={index} text_color={color}/>;
                    }
                )
            }
        </React.Fragment>
    );
}

export default App;
