const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("combined"));

morgan.token("body", (req) => JSON.stringify(req.body));
morgan(':method :url :status :res[content-length] - :response-time ms')

app.get("/",(req,res)=>{
    res.send("All is working fine");
})
let port=9900;
app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})