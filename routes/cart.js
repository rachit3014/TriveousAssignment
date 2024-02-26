const express = require("express");
const passport = require("passport");
const router = express.Router();
const cartController = require("../controllers/cart");


// Routes for add the product to cart
/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints related to the user's shopping cart.
 */

/**
 * @swagger
 * /cart/addcart:
 *   post:
 *     summary: Add a product to the cart or increment its quantity.
 *     tags: [Cart]
 *     description: Add a product to the user's cart or increment its quantity if it's already in the cart.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: The ID of the product to add to the cart.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product to add to the cart. If not provided, it defaults to 1.
 *     responses:
 *       '200':
 *         description: Product added to the cart successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 cart:
 *                   type: object
 *                   description: The user's updated cart.
 *       '400':
 *         description: Bad request. The request body is missing required fields or contains invalid data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   description: An array of validation errors, if any.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

// Routes for add the product to cart
router.post(
  "/addcart",
  passport.authenticate("jwt", { session: false }),
  cartController.addproductCart
);


// // Routes for get the cart item
/**
 * @swagger
 * /cart/cartitem:
 *   get:
 *     summary: View the user's shopping cart.
 *     tags: [Cart]
 *     description: Retrieve the details of the user's shopping cart.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     responses:
 *       '200':
 *         description: Cart details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 cart:
 *                   type: object
 *                   description: The user's shopping cart with product details.
 *       '404':
 *         description: Cart not found for this user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cart not found for this user
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */


// // Routes for get the cart item
router.get(
  "/cartitem",
  passport.authenticate("jwt", { session: false }),
  cartController.getCart
);


// Routes for remove  the product from cart

/**
 * @swagger
 * /cart/removeitem/{id}:
 *   delete:
 *     summary: Remove a product from the cart.
 *     tags: [Cart]
 *     description: Remove a specific product from the user's shopping cart.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to remove from the cart.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product removed from the cart successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 cart:
 *                   type: object
 *                   description: The user's updated shopping cart.
 *       '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   description: An array of validation errors, if any.
 *       '404':
 *         description: Cart or product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cart not found or Product not found in the cart
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

// Routes for remove  the product from cart
router.delete(
  "/removeitem/:id",
  passport.authenticate("jwt", { session: false }),
  cartController.removeItem
);


// Routes for decrement the product
/**
 * @swagger
 * /cart/decrementproduct/{productId}:
 *   delete:
 *     summary: Remove a product from the cart.
 *     tags: [Cart]
 *     description: Remove a specific product from the user's shopping cart.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: The ID of the product to remove from the cart.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product removed from the cart successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 cart:
 *                   type: object
 *                   description: The user's updated shopping cart.
 *       '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   description: An array of validation errors, if any.
 *       '404':
 *         description: Cart or product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cart not found or Product not found in the cart
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

// Routes for decrement the product
router.put(
  "/decrementproduct/:productId",
  passport.authenticate("jwt", { session: false }),
  cartController.quantitydecrement
);

module.exports = router;
