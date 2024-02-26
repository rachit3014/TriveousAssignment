const Product = require("../models/product");
const Category = require("../models/category");
const { validationResult } = require("express-validator");

//  to add  a product
module.exports.addproduct = async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, quantity, availability, price } = req.body;
    //  finding the category 
    let category =await Category.findOne({name:req.body.category})
    // if category name is not present then create a cateogry
    if(!category)
    {
      category = await Category.create({ name: req.body.category });
    }
  //   creating a product
    const product = await Product.create({
      name,
      description,
      quantity,
      availability,
      price,
      category,
    });
    return res.status(200).json({
      sucess: true,
      product,
    });
  } catch (error) {
    console.log(error);
    sucess: false;
    return res.status(400).json(error);
  }
};

//  to get a product data by its id

module.exports.getproductbyid = async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //  finding a product from params
    const product = await Product.findById(req.params.id).populate("category");
    return res.status(200).json({
      sucess: true,
      product,
      message: "sucessfully fetched data",
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      sucess: false,
      error: error.message(),
    });
  }
};

//  to get a product by its category id

module.exports.getproductbycategoryid = async function (req, res) {
  try {
    //  finding a product from its category id
    const product = await Product.find({ category: req.params.id }).populate(
      "category"
    );
    return res.status(200).json({
      sucess: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      sucess: false,
      error: error.message(),
    });
  }
};
