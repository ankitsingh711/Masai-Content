const express = require("express");
const OrdersRouter = express.Router();
const { OrdersModel } = require("../model/orders.model");

// <-------- Getting Orders Data Here ---------> 

OrdersRouter.get("/", async (req, res) => {
    try {
        const data = await OrdersModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

// <--------- Adding the orders into the DataBase --------------> 

OrdersRouter.post("/", async(req, res) => {
    const {company_symbol, price} = req.body;
    const date = new Date();
    console.log(date);
    try {
        const data = new OrdersModel({company_symbol, price, time: date});
        await data.save();
        res.send("Order has been added to the DB");
    } catch (error) {
        console.log(error);
    }
})

// <------- Updating the order data ---------> 

OrdersRouter.patch("/:id", async (req, res) => {
    const Id = req.params.id;
    const update_data = req.body;
    try {
        const data = await OrdersModel.findOneAndUpdate({ Id, update_data});
        res.send('Data has been updated');
    } catch (error) {
        console.log(error);
    }
})


// <-------- Deletin the order data --------> 

OrdersRouter.delete("/:id", async (req, res) => {
    const Id = req.params.id;
    try {
        await OrdersModel.findByIdAndDelete({ _id: Id });
        res.send("Data has been deleted");
    } catch (error) {
        console.log(error);
    }
})

module.exports = { OrdersRouter };