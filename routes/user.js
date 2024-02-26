const express = require("express");
const {check} = require("express-validator");
const router = express.Router();
const usercontroller = require("../controllers/user");

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API endpoints related to users
 */



// Define route for user registration
/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     description: Register a new user with a unique email .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user is should be greater than 5.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user account. Must be at least 8 characters long.
 *             example:
 *               name: john_doe
 *               email: johndoe@example.com
 *               password: mysecurepassword
 *     responses:
 *       '201':
 *         description: User registration successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating registration success.
 *       '400':
 *         description: Bad request. Validation error or user already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Error message for each validation error.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message indicating internal server error.
 *                 error:
 *                   type: string
 *                   description: The detailed error message.
 */

// routes  for signup the user
router.post(
  "/signup",
  [
    check("email","Email is not in correct format").isLength({ min: 10}),
    check("name", "Name should conatian 5 to 30 character").isLength({min:5}),
    check('password','password length should be greater than 5').isLength({min:5})
  ],
  usercontroller.registerUser
);


//  routes for signin the user
/**
 * @swagger
 * /user/signin:
 *   post:
 *     summary: Login as an existing user
 *     tags: [Users]
 *     description: Authenticate an existing user with their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password associated with the user's account.
 *             example:
 *               email: johndoe@example.com
 *               password: mysecurepassword
 *     responses:
 *       '200':
 *         description: Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating login success.
 *                 token:
 *                   type: string
 *                   description: A JWT token for authenticated requests.
 *       '401':
 *         description: Unauthorized. Incorrect password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating incorrect password.
 *       '404':
 *         description: Not Found. User not found with the provided email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating user not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message indicating internal server error.
 *                 error:
 *                   type: string
 *                   description: The detailed error message.
 */

//  routes for signin the user
router.post("/signin",  [
    check("email","Email is not in correct format").isEmail().isLength({ min: 10, max: 40 }),
    check('password','password length should be greater than 5').isLength({min:5, max:20})
  ], usercontroller.signin);
module.exports = router;
