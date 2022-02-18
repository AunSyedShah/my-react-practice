import Hello from "./Components/Hello";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [catFact, setCatFact] = useState([]);
    // API calling function
    const callApi = async () => {

        let api = `https://catfact.ninja/facts`;

        try {
            let response = await axios(
                {
                    method: "GET",
                    url: api
                }
            );

            if (response.status === 200) {
                console.log(response.data.data);
                let data = response.data.data;
                setCatFact(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => callApi(), []);

    return (
        <React.Fragment>
            {
                catFact.map(function (value, index) {
                    return <Hello fact={value.fact} key={index}/>
                })
            }
        </React.Fragment>
    );
}

export default App;
