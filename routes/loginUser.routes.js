import express from "express";
import { login, register } from "../controllers/loginUser.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Login
 */

/**
 * @swagger
 * /loginUser/register:
 *   post:
 *     tags: [Login]
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "user"
 *               address:
 *                 type: string
 *                 example: "123 Street Name, City"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post('/register', register);

/**
 * @swagger
 * /loginUser/authenticate:
 *   post:
 *     tags: [Login]
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */
router.post('/authenticate', login);

export default router;
