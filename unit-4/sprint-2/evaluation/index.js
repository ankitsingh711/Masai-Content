const express = require("express");
const app = express();
const fs = require("fs");
const { students } = require("./router/student.router");
const { teachers } = require("./router/teacher.router");

app.use(express.json());
app.use("/", teachers);
app.use("/", students);


let port = 9100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
