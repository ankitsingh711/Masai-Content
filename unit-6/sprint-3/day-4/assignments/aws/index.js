const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.status(200).json({
        msg: 'All ok-1',
    })
})

app.listen(3000, () => {
    console.log('Server is running on port')
})