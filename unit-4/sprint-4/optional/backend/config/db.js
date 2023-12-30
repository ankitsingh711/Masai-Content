const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const connection = mongoose.connect(process.env.mongoURL);

const userSchema = mongoose.Schema({
    name:String,
    username:{type:String, require:true},
    email:String,
    address:{type:Object},
    phone:Number,
    website:String,
    company:String
})

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };