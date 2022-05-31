const Product = require("../models/Products");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


const insertProduct = async (req, res) => {
  try {
    const { productName, price, category, comment, freshness, date } = req.body;

    const data = await new Product({
      productName,
      price,
      category,
      comment,
      date,
      freshness,
    });
    let result = await data.save();

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};



const deleteProduct = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    console.log(product);

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  // const { productName, price, category, comment, freshness, date } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, {
      $set: req.body,
    });

    console.log(product);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  deleteProduct,
  updateProduct,
};
