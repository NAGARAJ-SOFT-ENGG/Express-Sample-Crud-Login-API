import express from "express";
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

const router = express.Router()

// C - for Creating movies
router.post('/', MovieCreate);

// R{id} for ReadByID movies
router.get('/:id', MovieDetail);

// R - for reading movies
router.get('/', MovieIndex);

// U - for  Updating Movie
router.put('/:id', MovieUpdate);

// D - for Deleting the movie
router.delete('/:id', MovieDelete);

export default router;