import { model, Schema } from "mongoose";

const MovieEntity = new Schema({
    title : String,
    description : String
})

const Movie = model("Movie", MovieEntity);

export default Movie;