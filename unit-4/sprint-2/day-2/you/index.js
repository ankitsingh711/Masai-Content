const express = require("express");
const app = express();
const {studentRouter} = require("./routes/student.route");


app.use("/teachers",studentRouter);
app.use(express.json());
app.use("/students",studentRouter);



app.get("/", (req,res)=>{
    res.send("This is the home page");
})

let port = 8900;
app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})