import express from 'express';
import { MovieCreate, MovieDelete, MovieList, MovieUpdate } from '../controllers/movies.cotroller.js';

const router = express.Router();

//CRUD Functionality of Movies!

//For reading movies
router.get('/', MovieList)

//For Creating movie
router.post('/', MovieCreate)

//For Updating movie
router.put('/:id', MovieUpdate)

//For Deleting movie
router.delete('/:id', MovieDelete)

export default router;