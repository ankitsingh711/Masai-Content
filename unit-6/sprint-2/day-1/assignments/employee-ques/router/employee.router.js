const express = require("express");
const EmployeeRouter = express.Router();
const { Employee } = require("../model/employee.model");
const app = express();

app.use(express.json());

EmployeeRouter.get("/employee", async (req, res) => {
    try {
        const employee = await Employee.findAll();
        res.send(employee);
    } catch (error) {
        console.log(error);
    }
})

EmployeeRouter.post("/employee/create", async(req, res) => {
    const emp_data = req.body;
    await Employee.create(JSON.stringify(emp_data));
    res.send("Employee Created");
})

module.exports = { EmployeeRouter };