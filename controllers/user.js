const { validationResult } = require("express-validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



//  to register a user 
module.exports.registerUser = async function (req, res) {

  try {
    
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, name, password } = req.body;
//  check user already exists or not
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "user already exists",
    });
  }
  const hashpassword = await bcrypt.hash(password, 10);
//  creating a user
  await User.create({ email, name, password: hashpassword });
  return res.status(200).json({
    sucess: true,

    message: "user created sucessfully",
  });
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      sucess:false,
      error
    })
    
  }
};


//  for sign in  a user
module.exports.signin = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    matchPassword = await bcrypt.compare(req.body.password, user.password);
    if (!matchPassword) {
      return res.status(422).json({
        message: "please provide correct password",
      });
    }
    const jwttoken = jwt.sign(user.toJSON(), "ecommerce", { expiresIn: "1h" });
    return res.status(200).json({
      sucess: true,
      message: "sucesfully login",
      jwttoken,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      sucess: false,
      error: error.message,
    });
  }
};
