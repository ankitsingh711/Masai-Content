const express = require("express");
const app = express();
const CompanyRouter = express.Router();
const { CompanyModel } = require("../model/companies.model");
const Redis = require("redis");
const { OrdersModel } = require("../model/orders.model");

const redisClient = Redis.createClient();
// redisClient.on("error", (err) => {
//     console.error(err);
// })
// redisClient.on("connect", (err) => {
//     console.log("Connected to the Redis");
// })

// <----------- Getting company data here ------------> 

CompanyRouter.get("/", async (req, res) => {
    try {
        const data = await CompanyModel.find();
        res.send(data);
    } catch (error) {
        console.log(erorr);
    }
})

// <--------- Adding Company Data -----------> 

CompanyRouter.post("/", async (req, res) => {
    const { name, symbol } = req.body;
    try {
        const data = new CompanyModel({ name, symbol });
        await data.save();
        res.send("Company data has been added to the DB")
        // console.log(`Company data has been created`);
    } catch (error) {
        console.log(error);
    }
})

// <------------- Updating the company data here -----------> 
CompanyRouter.patch("/:id", async (req, res) => {
    const Id = req.params.id;
    const update_data = req.body;
    try {
            const data = await CompanyModel.findOneAndUpdate({ Id, update_data});
        res.send('Data has been updated');
    } catch (error) {
        console.log(error);
    }
})

// <---------- Deleting Company Data ------------> 

CompanyRouter.delete("/:id", async (req, res) => {
    const Id = req.params.id;
    try {
        await CompanyModel.findByIdAndDelete({ _id: Id });
        res.send("Data has been deleted");
    } catch (error) {
        console.log(error);
    }
})

// <------ Stats API ------->

CompanyRouter.get("/:symbol/stats", async (req, res) => {
    const { company_symbol } = req.params.symbol;
    try {
        redisClient.get("orders", async (err, orders) => {
            if(err) console.log(err);
            if(orders != null){
                return res.json(JSON.parse(orders));
            }else{
                const data = await OrdersModel.find({company_symbol});
                redisClient.setex("orders", 3600, JSON.stringify(data));
                res.send(data);
            }
        })
    } catch (error) {
        console.log(error);
    }
})




module.exports = { CompanyRouter };