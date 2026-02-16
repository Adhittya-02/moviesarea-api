import { model, Schema } from "mongoose";

const MovieEntity = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    }
})

const Movie = model("Movie", MovieEntity);

export default Movie;