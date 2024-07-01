const express = require("express");
const cors = require("cors")
require('dotenv').config();
const {errorHandler} = require("./middleware/ErrorMiddleware")
const mongoose = require('mongoose');

//Express app erstellen
const app = express();

app.use(cors());

//Routen importieren
const bewerbungenRoutes = require("./routes/bewerbungenRoutes");
const termineRoutes = require ("./routes/termineRoutes")

//Gibt den req.body als json wieder
app.use(express.json()) 
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/bewerbungen", bewerbungenRoutes);
app.use("/api/termine", termineRoutes)

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //Server aufbauen
        app.listen(4000, ()=>{
            console.log("Connected to DB & listening to port", process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error);
    })