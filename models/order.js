const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  totalprice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "placed",
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required:true
      },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
