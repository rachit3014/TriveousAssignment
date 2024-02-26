const express = require("express");

const router = express.Router();

const limiter=require("../config/ratelimit")
router.use("/user",limiter, require("./user"));
router.use("/product",limiter, require("./product"));
router.use("/category",limiter, require("./category"));
router.use("/order", require("./order"));
router.use("/cart", require("./cart"));

module.exports = router;
