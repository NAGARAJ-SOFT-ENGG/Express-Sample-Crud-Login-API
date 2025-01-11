import express from "express";

const router = express.Router()


// CRUD functionality of movies

// R - for reading movies
router.get('/', (req, res) => {
    res.send("Get all Movies list");
});

// C - for Creating movies
router.post('/', (req, res) => {
    res.send("Create a Movie");
});

// U - for  Updating Movie
router.put('/:id', (req, res) => {
    res.send("Update a Movie");
});

// D - for Deleting the movie
router.delete('/:id', (req, res) => {
    res.send("Delete a Movie");
});

export default router;