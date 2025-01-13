import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.json(movies);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message || 'An unexpected error occurred'
        });
    }
};

export const MovieCreate = async (req, res) => {
    // id, title, desc
    // validate you data
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc

    });

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
    } catch (errror) {
        return res.status(400).json({ message: errror.message });
    };

};

export const MovieDetail = async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);

        if (movie == null) {
            return res.status(404).json({ message: "Cannot Find Movie!" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const MovieUpdate = async (req, res) => {

    try {
        const updatedMovie = await Movie.findOneAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            desc: req.body.desc
        },
            {
                new: true,
            }
        );

        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export const MovieDelete = async (req, res) => {
    const movieId = req.params.id

    try {
        await Movie.deleteOne({ _id: movieId })
        res.json({ message: "Movie Deleted!!" })
    } catch (error) {
        res.status(500).json(message.error.message)
    }
};

