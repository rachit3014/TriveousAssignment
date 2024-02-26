const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const passport = require("passport");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints related to the Orders.
 */


//Route to get order details by id
/**
 * @swagger
 * /order/deatils/{id}:
 *   get:
 *     summary: Get detailed information about an order
 *     tags: [Orders]
 *     description: Retrieve detailed information about a specific order by its ID.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Order details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   type: object
 *                   description: Detailed information about the order.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The ID of the order.
 *                     users:
 *                       type: string
 *                       description: The user who placed the order.
 *                     items:
 *                       type: array
 *                       description: List of items in the order.
 *                       items:
 *                         type: object
 *                         properties:
 *                           product:
 *                             type: string
 *                             description: The ID of the product.
 *                           quantity:
 *                             type: integer
 *                             description: The quantity of the product in the order.
 *                     totalprice:
 *                       type: number
 *                       description: The total amount of the order.
 *       '403':
 *         description: Forbidden. Unauthorized access to order details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *         description: Order not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
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

// Routes to get an order details

router.get(
  "/deatils/:id",
  passport.authenticate("jwt", { session: false }), orderController.orderdetails
);



//Route to get order history
/**
 * @swagger
 * /order/history:
 *   get:
 *     summary: Get order history for an authenticated user
 *     tags: [Orders]
 *     description: Retrieve the order history of an authenticated user.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     responses:
 *       '200':
 *         description: Order history retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   description: List of orders made by the user.
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the order.
 *                       users:
 *                         type: string
 *                         description: The user who placed the order.
 *                       itemss:
 *                         type: array
 *                         description: List of items in the order.
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               description: The ID of the product.
 *                             quantity:
 *                               type: integer
 *                               description: The quantity of the product in the order.
 *                       totalprice:
 *                         type: number
 *                         description: The total amount of the order.
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

// Routes to get an order history

router.get(
  "/history",
  passport.authenticate("jwt", { session: false }), orderController.orderhistory
);

// Routes to place an order

/**
 * @swagger
 * order/addorder:
 *   post:
 *     summary: Place an order
 *     tags: [Orders]
 *     description: Place an order using items from the user's cart.
 *     security:
 *       - bearerAuth: []  # This associates the "bearerAuth" scheme with this route
 *     responses:
 *       '200':
 *         description: Order placed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 order:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The ID of the order.
 *                     users:
 *                       type: string
 *                       description: The user who placed the order.
 *                     items:
 *                       type: array
 *                       description: List of items in the order.
 *                       items:
 *                         type: object
 *                         properties:
 *                           product:
 *                             type: please provide product id 
 *                             description: The ID of the product.
 *                           quantity:
 *                             type: integer
 *                             description: The quantity of the product in the order.
 *                     totalprice:
 *                       type: number
 *                       description: The total amount of the order.
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
 *         description: Cart not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cart not found. Please add items to your cart first.
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

// Routes to place an order
router.post(
  "/addorder",
  passport.authenticate("jwt", { session: false }),
  orderController.orderplacement
);
module.exports = router;
