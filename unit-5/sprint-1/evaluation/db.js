const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect("mongodb+srv://ankit:ankitsingh@masai.qtzwnsy.mongodb.net/Users?retryWrites=true&w=majority");

const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password : String
},{versionKey:false});

const UserModel = mongoose.mongoose.model("usersEval", userSchema);

module.exports = { connection, UserModel };