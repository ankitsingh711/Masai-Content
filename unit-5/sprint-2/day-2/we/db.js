const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:127.0.0.1/27017");

module.exports = {connection};

