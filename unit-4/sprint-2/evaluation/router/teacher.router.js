const express = require("express");
const app = express();
const teachers = express.Router();
const fs = require("fs");
app.use(express.json());

teachers.get("/teachers", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let t_data = p_data.teachers;
    res.send(t_data);
  } catch (err) {
    console.log(err);
  }
});

//Get student by emp_id:

teachers.get("/teachers/:empID", (req, res) => {
  try {
    let id = req.params.empID;
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let teacher = p_data.teachers;
    console.log(teacher);
    let part_tech = teacher.filter((elem) => {
      return elem.emp_id == id;
    });
    res.send(part_tech);
  } catch (err) {
    console.log(err);
  }
});

teachers.post("/teachers/addteacher", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let body = req.body;
    p_data.teachers.push(body);
    fs.writeFileSync("./db.json", JSON.stringify(p_data));
    res.send("Teacher data added");
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  teachers,
};
