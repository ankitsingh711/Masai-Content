const express = require("express");
const app = express();
const students = express.Router();
const fs = require("fs");
app.use(express.json());
const { validator } = require("../middleware/validator.middle");

students.get("/students", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let s_data = p_data.students;
    res.send(s_data);
  } catch (err) {
    console.log(err);
  }
});

//Get students by their roll number:

students.get("/students/:rollNo", (req, res) => {
  try {
    let roll = req.params.rollNo;
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let student = p_data.students;
    console.log(student);
    let part_stud = student.filter((elem) => {
      return elem.roll_no == roll;
    });
    res.send(part_stud);
  } catch (err) {
    console.log(err);
  }
});

//Adding student to the data:
students.post("/students/addstudent", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    let body = req.body;
    p_data.students.push(body);
    fs.writeFileSync("./db.json", JSON.stringify(p_data));
    res.send("Students added");
  } catch (err) {
    console.log(err);
  }
});

//Using middleware to protect the patcha and delete method:
app.use(validator);

//Update students by their roll_number:
students.patch("/students/:rollNo", (req, res) => {
  try {
    let roll = req.params.rollNo;
    const data = fs.readFileSync("./db.json", "utf-8");
    const p_data = JSON.parse(data);
    const body = req.body;
    let filter_data = p_data.students.filter((elem) => {
      if (elem.roll_no == roll) {
        elem.roll_no = body.roll_no || elem.roll_no;
        elem.name = body.name || elem.name;
        elem.location = body.location || elem.location;
        elem.course = body.course || elem.course;
      }
      return elem;
    });
    p_data.students.splice(0, p_data.students.length);
    p_data.students = filter_data;
    fs.writeFileSync("./db.json", JSON.stringify(p_data));
    res.send(`Data updated at ${roll}`);
  } catch (err) {
    console.log(err);
  }
});

//Delete the students by their roll number:

students.delete("/students/:rollNo", (req, res) => {
  let roll = req.params.rollNo;
  const data = fs.readFileSync("./db.json", "utf-8");
  const p_data = JSON.parse(data);
  let stud = p_data.students;
  let student = stud.filter((elem) => {
    return elem.roll_no != roll;
  });
  p_data.students.splice(0, p_data.students.length);
  p_data.students = student;
  fs.writeFileSync("./db.json", JSON.stringify(p_data));
  res.send("Students data updated");
});

module.exports = {
  students,
};
