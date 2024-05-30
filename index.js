const express = require("express");
const cors = require("cors");
require("./socket/socket");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
