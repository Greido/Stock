const express = require("express");
const path = require("path");

//Initializaciones
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//Middlewares

//Global variables

//Routes

//static files
module.exports = app;
