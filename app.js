const express = require('express');
const app = express();

const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");

app.use("/", home); //use -> 미들웨어 등록해주는 메소드

app.listen(PORT, ()=>{
    console.log("server start");
});

