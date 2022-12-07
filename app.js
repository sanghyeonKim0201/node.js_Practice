const express = require("express");
const app = express();

const home = require("./src/routes/home");
app.use("/", home);

app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
