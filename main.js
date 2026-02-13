import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./entity/db.js";

const app = express();
const port = 3000;


//JSON Middleware
app.use(express.json());

//Connect DB
connectDB();

app.get('/', (req, res) => {
    res.json({ msg: "Hello World!"});
})


//CRUD Functionality of Movies!

app.use('/movies', movieRoutes)

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});