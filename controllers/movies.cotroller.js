import Movie from "../models/movie.model.js";

export const MovieList = (req, res) => {
    res.send("Get all movies")
};

export const MovieCreate = async (req, res) => {
    const newMovie = new Movie({
        title : req.body.title,
        description : req.body.description
    })

    try {
        const savedMovie = await newMovie.save();
        return res.status(201).json(savedMovie);
    } catch (error) {
        return res.status(400).json({message : error.message});
    }
}

export const MovieUpdate = (req, res) => {
    res.send("Update a movie")
}

export const MovieDelete = (req, res) => {
    res.send("Delete a movie")
}