const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello and welcome to the aws instance");
});

app.listen(8080, () => {
    console.log(`App is running on port ${3400}`);
});