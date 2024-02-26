const express = require("express");
const passport = require("passport");
const {check, param} = require("express-validator");

const router = express.Router();
const productController = require("../controllers/product");

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: API endpoints related to products
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         category:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         availability:
 *           type: boolean
 *         quantity:
 *           type: integer
 *       required:
 *         - name
 *         - category
 *         - price
 *         - description
 *         - availability
 *         - quantity
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


//  routes to add product 


/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: Insert a new product
 *     tags: [Products]
 *     description: Insert a new product with details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               availability:
 *                 type: boolean
 *               quantity:
 *                 type: integer
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     responses:
 *       '201':
 *         description: Product added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 savedProduct:
 *                   $ref: '#/components/schemas/Product'
 */

//  routes to add product 
router.post(
  "/add",
  [
    check("name","name is not in correct format should be greater than 3").isLength({ min: 3}),
    check("price", "price should be numeric value").isNumeric(),
    check('availability','availability should be boolean value').isBoolean(),
    check('quantity','quantity should be numeric').isNumeric(),
    check('description','description length should be greater than 5').isLength({min:5}),
    check('category','category should not be empty').notEmpty(),
  ],
  
  passport.authenticate("jwt", { session: false }),
  productController.addproduct
);


//  routes to get product by its id

/**
 * @swagger
 * /product/getproduct/{id}:
 *   get:
 *     summary: Get product details by ID
 *     tags: [Products]
 *     description: Retrieve product details by specifying its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique ID of the product to retrieve.
 *     responses:
 *       '200':
 *         description: Product details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product with ID {productId} not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 *                 error:
 *                   type: string
 *
 */

//  routes to get product by its id
router.get("/getproduct/:id",
 productController.getproductbyid);


// routes to fetch the product from its  category id 

/**
 * @swagger
 * /product/category/{id}:
 *   get:
 *     summary: Get product details by  category ID
 *     tags: [Products]
 *     description: Retrieve product details by specifying category unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique ID of the category to retrieve the product.
 *     responses:
 *       '200':
 *         description: Product details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  description: The name of the Category.
 *             example:
 *               name: Kitchen
 *               id: 34567890345678
 *       '404':
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product with ID {CategoryId} not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 *                 error:
 *                   type: string
 *
 */

// routes to fetch the product from its  category id 
router.get("/category/:id",productController.getproductbycategoryid);
module.exports = router;
