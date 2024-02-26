const Cart = require("../models/cart");


//  to retrive a user cart details
module.exports.getCart = async function (req, res) {
  //  finding cart of the user
  const cart = await Cart.findOne({ user: req.user.id }).populate(
    "items.product"
  );
  // if cart is not present to the user
  if (!cart) {
    return res.status(404).json({ message: "cart not found " });
  }
  return res.status(200).json({
    sucess: true,
    cart,
  });
};

// to add a product to the cart of the user 


module.exports.addproductCart = async function (req, res) {
  try {
    //  finding the cart of the user
    const cart = await Cart.findOne({ user: req.user.id });
//  if cart is not present then  to create a cart
    if (!cart) {
      let cart = await Cart.create({
        user: req.user.id,
        items: [{ product: req.body.product, quantity: req.body.quantity }],
      });
      return res.status(200).json({
        sucess: true,
        cart,
      });
    } else {

      const existsitem = cart.items.find(
        (item) => item.product == req.body.product
      );
      //  if the item is alreday exists then increase the quantity and price
      if (existsitem) {
        existsitem.quantity += parseInt(req.body.quantity);
        await cart.save();
      } else {
        cart.items.push({
          product: req.body.product,
          quantity: req.body.quantity,
        });
        await cart.save();
      }
    }
    return res.status(200).json({
      sucess: true,
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error,
      sucess: false,
    });
  }
};

//  module to remove a item from cart
module.exports.removeItem = async function (req, res) {
  try {
    //  finding the cart of the user
    const cart = await Cart.findOne({ user: req.user.id });
    // console.log(cart);
    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }
    //  if cart is present then remove the product from cart
    const cartitem =  cart.items.findIndex(
      (item) => 
      item.product == req.params.id
         
     
      );
    console.log(req.params.id,cartitem);
    if (cartitem==-1) {
      return res.status(404).json({ message: "cart not found" });
    }
    cart.items.splice(cartitem, 1);
    await cart.save();
    return res.status(200).json({
      message: "sucessfully removed product from cart",
    });
  } catch (error) {
    console.log(error);
    // return res.status(400).json({
    //   error,
    //   sucess: false,
    // });
  }
};

//  to decrement the quantity of the product
module.exports.quantitydecrement = async function (req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;

    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the cart item corresponding to the provided productId
    const cartItemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (cartItemIndex === -1) {
      return res.status(404).json({ message: "Product not found in the cart" });
    }

    // Decrement the quantity
    if (cart.items[cartItemIndex].quantity > 0) {
      cart.items[cartItemIndex].quantity -= 1;
      // Remove the item from the cart if the quantity becomes 0
      if (cart.items[cartItemIndex].quantity === 0) {
        cart.items.splice(cartItemIndex, 1);
      }
    }

    await cart.save();

    res.json({ message: "Quantity decremented successfully", cart });


  } catch (error) {
    console.log(error);
    return res.status(400).json({
      sucess: false,
      error,
    });
  }
};
