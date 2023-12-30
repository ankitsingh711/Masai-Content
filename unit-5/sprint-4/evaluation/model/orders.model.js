const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    company_symbol: String,
    price: Number,
    time: Date
}, { versionKey: false });

const OrdersModel = mongoose.model("orders", ordersSchema);

module.exports = { OrdersModel };