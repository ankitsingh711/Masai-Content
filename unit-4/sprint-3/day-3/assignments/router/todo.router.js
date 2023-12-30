const { application } = require("express");
const express = require("express");
const todoRouter = express.Router();
const { TodoModel } = require("../model/todo.model");
const app = express();
const mongoose = require("mongoose");

// <--------Middleware----->
app.use(express.json());

// <-----Get all the data of users---->
todoRouter.get("/", async (req, res) => {
  try {
    const data = await TodoModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// <------Create todos ------>
todoRouter.post("/create", async (req, res) => {
  try {
    const data = new TodoModel(req.body);
    await data.save();
    res.send("<--------Data has been added--------->");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// <------Edit todos with the id ----->

todoRouter.patch("/:todoid", async (req, res) => {
  const id = req.params.todoid;
  try {
    const data = await TodoModel.findByIdAndUpdate(id, req.body);
    await data.save();
    res.send("<-------Todo Data Updated------->");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// <------Todo Whole Data Updated----->

todoRouter.put("/:todoid", async (req, res) => {
  const id = req.params.todoid;
  try {
    const data = await TodoModel.findOneand (id, req.body);
    await data.save();
    res.send("<-----Data Updated By Put Method------>");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// <-------Delete the data by the id-------->

todoRouter.delete("/:todoid", async (req, res) => {
  const id = req.params.todoid;
  try {
    await TodoModel.findOneAndDelete({_id:id});
    res.send(`<------Data Deleted of Id:------> ${id}`);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

module.exports = {
  todoRouter,
};
