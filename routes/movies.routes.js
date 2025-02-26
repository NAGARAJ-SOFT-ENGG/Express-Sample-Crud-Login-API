import express from "express";
import {
    MovieCreate,
    MovieDelete,
    MovieDetail,
    MovieIndex,
    MovieUpdate
} from "../controllers/movies.controller.js";

const router = express.Router();

/**
 * @swagger
 * /movies:
 *   post:
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - desc
 *               - releaseYear
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Inception"
 *               desc:
 *                 type: string
 *                 example: "Sci-Fi"
 *               releaseYear:
 *                 type: integer
 *                 example: 2010
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post("/", MovieCreate);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.get('/:id', MovieDetail);

/**
 * @swagger
 * /movies:
 *   get:
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', MovieIndex);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     tags: [Movies]
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
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Movie Title"
 *               desc:
 *                 type: string
 *                 example: "Drama"
 *               releaseYear:
 *                 type: integer
 *                 example: 2022
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
router.put('/:id', MovieUpdate);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.delete('/:id', MovieDelete);

export default router;
