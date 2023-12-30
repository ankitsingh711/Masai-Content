const express = require("express");
const app = express();
const db = require("./models/index");
const { brands, products } = require("./models/index");

app.use(express.json());

// <------ R: Reading the data of brands ------->
app.get("/api/brands", async (req, res) => {
  try {
    const brand_data = await brands.findAll();
    res.status(200).json({
      isError: false,
      brand_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
    console.log(error)
  }
});

// <--------- C: Creating the data of brands ---------->
app.post("/api/brands", async (req, res) => {
  try {
    const { name, logo } = req.body;
    const brand_data = await brands.create({
      name,
      logo,
    });
    res.status(200).json({
      isError: false,
      brand_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
    console.log(error)
  }
});

// <-------- U: Updating the data of brands -------->
app.put("/api/brands/:id", async (req, res) => {
  try {
    const { name, logo } = req.body;
    const brand_data = await brands.upsert({
      id: req.params.id,
      name,
      logo,
    });
    res.status(200).json({
      isError: true,
      brand_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// <--------- D: Deleting the brands with the id ---------->
app.delete("/api/brands/:id", async (req, res) => {
  try {
    const brand_data = await brands.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      isError: true,
      brand_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// <----- Products Routes Starts Here ----->

// <------- R: Reading all the data of products -------->
app.get("/api/products", async (req, res) => {
  try {
    brands.hasMany(products, { foreignKey: "brandID"});
    products.belongsTo(brands, {
        foreignKey: "brandID"
    })
    const product_data = await products.findAll({
        include: [brands]
    });
    res.status(200).json({
      isError: false,
      product_data,
    });
    console.log(error)
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

/// <---------- C: Creating the data of products --------->
app.post("/api/products", async (req, res) => {
  try {
    const { name, image, price, brandID } = req.body;
    const product_data = await products.create({
      name,
      image,
      price,
      brandID
    });
    res.status(200).json({
      isError: false,
      product_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// <------- U: Updating the deta of products ------->
app.put("/api/products/:id", async (req, res) => {
  try {
    const { name, image, price, brandID } = req.body;
    const product_data = await products.upsert({
      id: req.params.id,
      name,
      image,
      price,
      brandID
    });
    res.status(200).json({
      isError: false,
      product_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

//<---------- D: Deleting the data of Products with the respective id ----->
app.delete("/api/products/:id", async (req, res) => {
  try {
    const product_data = await products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      isError: false,
      product_data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

//<---  Connecting to the server and syncing sql ---->
db.sequelize.sync().then(() => {
  app.listen("2200", () => {
    console.log("Server is running on port 2200");
  });
});
