const mysql = require("mysql");
require("dotenv").config({path: "./.env"});

const con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

con.connect((err)=>{
    if(err)console.log(err);
    else console.log("MYSQL CONNECTED");
});

module.exports = con;