import express from "express";
import movieRoutes from './routes/movies.routes.js'
const app = express()
const PORT = 6969


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