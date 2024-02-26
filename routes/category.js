const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: API endpoints related to the Category.
 */

//Route to get Category

/**
 * @swagger
 * /category/getCategory:
 *   get:
 *     summary: Get  list of category
 *     tags: [Category]
 *     description: Retrieve the category list.
 *     responses:
 *       '200':
 *         description: Category list retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Category:
 *                   type: array
 *                   description: List of category .
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the category.
 *                       name:
 *                         type: string
 *                         description: The name of the cateogry.
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

//Route to get Category
router.get('/getCategory',categoryController.getCategory)
module.exports = router;
