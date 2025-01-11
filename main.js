import express from "express";

const app = express()
const PORT = 6969


app.get('/', (req, res) => {
    res.json({msg: "hello World"})
})

// CRUD functionality of movies

// R - for reading movies
app.get('/movies', (req, res) => {


})

// C - for Creating movies
app.post('/movies', (req, res) => {
    

})

// U - for  Updating Movie
app.put('/movies/:id', () => {

} )

app.delete('/movies/:id', () => {

})

// D - for Deleting the movie
app.listen(PORT, () => {
    console.log(`the app was running at http://localhost${PORT}`)
})

//Dry principle
//KISS principle