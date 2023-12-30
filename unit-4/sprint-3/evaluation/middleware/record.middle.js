const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const Record = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (req.method === "PATCH" || req.method === "PUT") {
      let data = `The document with id:${id} has been Updated \n`;
      fs.appendFileSync("records.txt", data);
      next();
    } else if (req.method === "DELETE") {
      let data = `\n The document with id:${id} has been deleted \n`;
      fs.appendFileSync("records.txt", data);
      next();
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.send("Error while adding the updated or deleted files in record.txt");
  }
};

module.exports = {
  Record,
};
