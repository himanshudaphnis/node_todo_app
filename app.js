var express = require("express");

var todoController = require("./controllers/todoController");

var app = express();

// set up template engine
app.set("view engine", "ejs");

// static files
app.use(express.static("./public"));

// fire controllers
todoController(app);

// listen to port 8000
app.listen(8000);
console.log("u r listening to port 8000");
