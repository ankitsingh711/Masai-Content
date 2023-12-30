const mongoose = require("mongoose");

const cricketSchema = mongoose.Schema({
    wickets: Number,
    over: Number,
    run: Number
})

const CricketModel = mongoose.model("cricket", cricketSchema);

module.exports = {
    CricketModel
}