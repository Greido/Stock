const express = require("express");
const app = express();
const path = require("path");
const { send } = require("process");
//settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join__dirname + "/views");

//inicializacions

//midlewares

app.use(express.urlencoded({ extends: false }));

//global variables

//Routes
app.get("/", (req, res) => {
  res.send("hello world");
});
//static files
module.exports = app;
