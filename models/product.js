const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
