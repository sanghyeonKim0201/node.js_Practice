const express = require('express');
const app = express();

const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, ()=>{
    console.log("server start");
});

app.get("/", (req, res) =>{
    res.render("home/index");
});
app.get("/login", (req, res) =>{
    res.render("home/login");
});
