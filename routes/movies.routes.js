import express from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "./controllers/movies.controller";

const router = express.Router()

// R - for reading movies
router.get('/', MovieIndex);

// C - for Creating movies
router.post('/', MovieCreate);

// U - for  Updating Movie
router.put('/:id', MovieUpdate);

// D - for Deleting the movie
router.delete('/:id', MovieDelete);

export default router;