import { React, useEffect, useState } from "react"
const axios = require("axios")

const App = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false)

  useEffect(() => {
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
    fetchData()
  }, [data])

  return (
    <div>
      {display ? <h1>Data fetched successfully</h1> : <h1>Reload the page once more</h1>}
    </div>
  )

}

export default App;
