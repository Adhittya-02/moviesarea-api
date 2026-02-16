import Movie from "../models/movie.model.js";

export const MovieList = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
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

export const MovieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({message : "Cannot find movie"});
        }
        else{
            return res.json(movie)
        }
    } catch (error) {
        return res.status(500).json({message : error.message});        
    }
}

export const MovieUpdate = async (req, res) => {
    try 
    {
        const updatedMovie = await Movie.findByIdAndUpdate(
        { 
            _id: req.params.id 
        },
        {
            title: req.body.title,
            description : req.body.description
        }, 
        {
            returnDocument: 'after'
        })
        res.status(200).json(updatedMovie);
    }
    catch (error) 
    {
        return res.status(400).json({message : error.message});        
    }
}

export const MovieDelete = async (req, res) => {
    try 
    {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
        return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({
        message: "Movie deleted successfully",
        deletedMovie
        });
    } 
    catch (error) 
    {
        res.status(400).json({ message: error.message });
    }
}