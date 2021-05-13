const express = require("express");
const app = express();
const cors = require("cors");
const dbQuery = require("./database/database");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/fetch", async (req, res) => {
    const data = await dbQuery.fetchData()
    dbQuery.closeConnection();
    res.json(data)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
