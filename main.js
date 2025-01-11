import express from "express";
import movieRoutes from './routes/movies.routes.js'
import connectDB from "./lib/db.js";
const app = express()
const PORT = 6969


// Data Understanding MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connect DB
connectDB();


app.get('/', (req, res) => {
    res.json({msg: "hello World"})
})

// CRUD functionality of movies
app.use('/movies', movieRoutes)

app.listen(PORT, () => {
    console.log(`the app was running at http://localhost${PORT}`)
})

//Dry principle
//KISS principle