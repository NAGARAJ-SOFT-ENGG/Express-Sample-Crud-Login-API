import express from "express";
import movieRoutes from './routes/movies.routes.js'
import userRoutes from './routes/user.routes.js'
import loginUserRoutes from './routes/loginUser.routes.js'
import connectDB from "./lib/db.js";
import { swaggerUi, swaggerSpec } from "./Docs/swagger.js";
const app = express()
const PORT = 6969


//SwaggerUI
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Data Understanding MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect DB
connectDB();


app.get('/', (req, res) => {
    res.json({ msg: "hello World" })
});

// CRUD functionality of movies
app.use('/movies', movieRoutes);
app.use('/user', userRoutes);
app.use('/loginUser', loginUserRoutes);


app.listen(PORT, () => {
    console.log(`the app was running at http://localhost${PORT}`)
});

//Dry principle
//KISS principle