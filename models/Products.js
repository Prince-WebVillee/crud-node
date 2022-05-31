const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  freshness: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
