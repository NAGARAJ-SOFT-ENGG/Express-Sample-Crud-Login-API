import express from 'express';
import { addUser, deleteUser, getAllUser, updateUser, userDetail } from '../controllers/user.Controller.js';

const router = express.Router();

/**
 * @swagger
 * /user:
 *   get:
 *     tags: [user]
 *     responses:
 *       200:
 *         description: A list of user.
 */

router.get('/', getAllUser);

/**
 * @swagger
 * /user:
 *   post:
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - adress
 *               - phoneNumber
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "Anamika"
 *               adress:
 *                 type: string
 *                 example: "Kesavai"
 *               phoneNumber:
 *                 type: string
 *                 example: "4444444444"
 *     responses:
 *       201:
 *         description: User successfully created
 *       400:
 *         description: Invalid request data
 */

router.post('/', addUser);



/**
 * @swagger
 * /user/{id}:
 *   get:
 *     description: Fetch details of a user using their unique ID.
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details retrieved successfully      
 *       400:
 *         description: Invalid user ID provided
 *       404:
 *         description: User not found
 */

router.get('/:id', userDetail)

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - adress
 *               - phoneNumber
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "Anamika Updated"
 *               adress:
 *                 type: string
 *                 example: "Kesavai, New Area"
 *               phoneNumber:
 *                 type: string
 *                 example: "5555555555"
 *     responses:
 *       200:
 *         description: User successfully updated
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: User not found
 */

router.put('/:id', updateUser);


/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User successfully deleted
 *       400:
 *         description: Invalid user ID provided
 *       404:
 *         description: User not found
 */

router.delete('/:id', deleteUser);


export default router;