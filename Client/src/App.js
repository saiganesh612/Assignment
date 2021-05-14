import { React, useState } from "react"
import Card from "./components/card"
import Header from "./components/header"
import Content from "./components/content"
const axios = require("axios")

const App = () => {
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false)

    async function fetchData() {
        try {
            const response = await axios.get("/fetch");
            setData(response.data);
            setDisplay(true)
        } catch (err) {
            console.log(err.message);
            setDisplay(false)
        }
    }

    if (data.length === 0) fetchData()

    return (
        <>
            <Header />
            <Content />
            <div className="container">
                {!display ?
                    <h1>Reload the page once more</h1> :
                    <div className="row">
                        {
                            data.map((info, index) => {
                                return <Card key={index} info={info} />
                            })
                        }
                    </div>
                }
            </div>
        </>
    )

}

export default App;
