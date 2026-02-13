import express from 'express';

const router = express.Router();

//CRUD Functionality of Movies!

//For reading movies
router.get('/', (req, res) => {
    res.send("Get all movies")
})

//For Creating movie
router.post('/', (req, res) => {
    res.send("Create a movie")
})

//For Updating movie
router.put('/:id', (req, res) => {
    res.send("Update a movie")
})

//For Deleting movie
router.delete('/:id', (req, res) => {
    res.send("Delete a movie")
})

export default router;