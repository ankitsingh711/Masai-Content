const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    name: String,
    symbol: String
}, {versionKey: false});

const CompanyModel = mongoose.model("companies", companySchema);

module.exports = { CompanyModel };