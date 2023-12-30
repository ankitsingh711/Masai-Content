const express = require("express");
const OrdersRouter = express.Router();
const Orders = require("../models/index"); 


// <----- Get all the orders data --------> 
OrdersRouter.get("/", async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json({
            isError: false,
            orders
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error
        })
    }
})


// <----- Orders adding here ----------> 
OrdersRouter.post("/create", async (req, res) => {
    try {
        const {name, quantity, price} = req.body;
        await Orders.create({
            name,
            quantity,
            price
        })
        res.status(200).json({
            isError: false,
            msg: "Orders added"
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error
        })
    }
})

// <---------- Deleting order here ----------> 
OrdersRouter.delete("/delete", async (req, res) => {
    try {
        await Orders.destroy();
        res.status(200).json({
            isError: false,
            msg: "Order deleted"
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error
        })
    }
})

module.exports = OrdersRouter;