// import express from "express";
// import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

// const router = express.Router()

// // C - for Creating movies
// router.post('/', MovieCreate);

// // R{id} for ReadByID movies
// router.get('/:id', MovieDetail);

// // R - for reading movies
// router.get('/', MovieIndex);

// // U - for  Updating Movie
// router.put('/:id', MovieUpdate);

// // D - for Deleting the movie
// router.delete('/:id', MovieDelete);

// export default router;

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
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - genre
 *               - releaseYear
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Inception"
 *               genre:
 *                 type: string
 *                 example: "Sci-Fi"
 *               releaseYear:
 *                 type: integer
 *                 example: 2010
 *     responses:
 *       201:
 *         description: Movie created successfully.
 *       400:
 *         description: Bad request
 */
router.post("/", MovieCreate);


/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     description: Retrieve a single movie by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A movie object.
 */
router.get('/:id', MovieDetail);

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     description: Retrieve a list of all movies.
 *     responses:
 *       200:
 *         description: A list of movies.
 */
router.get('/', MovieIndex);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     description: Modify movie details by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie updated successfully.
 */
router.put('/:id', MovieUpdate);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     description: Remove a movie from the database by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully.
 */
router.delete('/:id', MovieDelete);

export default router;
