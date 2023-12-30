const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json()) //middleware

app.get("/",(req,res)=>{
    res.send("Hello from express js");
})

app.get("/alldata", (req,res)=>{
    const data = fs.readFileSync("db.json","utf-8");
    const parse_data = JSON.parse(data);
    res.send(parse_data);
})

app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("Data has been added");
})

app.get("/allstudents",(req,res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    let str = JSON.parse(data);
    console.log(str.student);
    res.send("Students data is in the terminal");
})

app.post("/addStudents",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parse_data = JSON.parse(data);
    console.log(parse_data);
    //Parsing the data to add the new students.
    //adding the newe students to the student object:
    parse_data.student.push(req.body);
    //write the file
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    res.send("database updated");
})

app.post("/addTeacher",(req,res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    let parse_data = JSON.parse(data);
    parse_data.teacher.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(parse_data));
    res.send("Teacher database updated");
})

//delete a student from the database:

app.delete("/deleteTeacher",(req,res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    const parse_data = JSON.parse(data);
    let teacher = parse_data.teacher;
    let t = teacher.filter((elem)=>{
        return elem.name !== "Pulkit"
    })
    fs.writeFileSync("./db.json", JSON.stringify(t));
    res.send("Pulkit tyagi has been deleted");
})


app.listen(9000,()=>{
    console.log("Server is running on the port 9000");
})