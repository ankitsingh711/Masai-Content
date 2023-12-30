const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: { type: String },
    isCompleted: { type: Boolean },
    duration: { type: Number },
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = {
  TodoModel,
};
