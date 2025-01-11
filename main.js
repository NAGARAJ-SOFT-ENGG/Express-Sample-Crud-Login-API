import express from "express";

const app = express()
const PORT = 6969


app.get('/', (req, res) => {
    res.json({msg: "hello World"})
})

app.listen(PORT, () => {
    console.log(`the app was running at http://localhost${PORT}`)
})

//Dry principle
//KISS principle