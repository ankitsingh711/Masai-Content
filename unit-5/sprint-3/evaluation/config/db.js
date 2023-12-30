const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const connections = mongoose.connect(process.env.mongourl);

console.log("Connected");

module.exports = {
    connections,
}