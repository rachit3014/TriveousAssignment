const Cart = require("../models/cart");
const Order = require("../models/order");

// to retrevie  a particular order
module.exports.orderdetails = async function (req, res) {
  try {
    console.log(req.user.id)
    const order = await Order.findById(req.params.id).populate("items.product");
    console.log(order.users)
    if (!order) {
      return res
        .status(404)
        .json({ sucess: false, message: "order not found" });
    } else if (order.users != req.user.id) {
      return res
        .status(403)
        .json({ sucess: false, message: "unauthorized person" });
    }
    return res.status(200).json({ sucess: true, order });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      sucess: false,
      error,
    });
  }
};


//  to reterive user order history
module.exports.orderhistory = async function (req, res) {
  try {
    const order = await Order.find({ users: req.user.id }).populate(
      "items.product"
    );
    if (!order) {
      return res.status(404).json({
        message: "please order some item",
        sucess: false,
      });
    }
    return res.status(200).json({
      sucess: true,
      order,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      sucess: false,
      error,
    });
  }
};




// to place a order

module.exports.orderplacement = async function (req, res) {
  try {
  const cart = await Cart.findOne({ user: req.user.id }).populate(
    "items.product"
  );
    console.log(cart)
    if (!cart || !cart.items.length) {
      return res
        .status(404)
        .json({ sucess: false, message: "please add item to cart" });
    }
    let totalprice = 0;
    for (const item of cart.items) {
      // console.log(item)
      totalprice += item.product.price * item.quantity;
    }
    const order =await  Order.create({
      users: req.user.id,
      items: cart.items.map((item) => ({
        product: item.product.id,
        quantity: item.quantity,
      })),
      totalprice: totalprice,
    });
    
    await Cart.findByIdAndDelete(cart.id)
    return res.status(200).json({
        sucess:true,
       
        order
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ sucess: false, error });
  }
};
