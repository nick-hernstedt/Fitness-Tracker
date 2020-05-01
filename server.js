//use express
const express = require("express");
//use mongoose (great for catching code snakes)
const mongoose = require("mongoose");
const routes = require("./controllers/controller.js");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

//pick a port
const PORT = process.env.PORT || 3000;

//creat an express function variable
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/routes.js"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`go google localhost:${PORT}!`);
});
