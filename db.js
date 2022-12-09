const mysql = require("mysql");
const config = require("./config.json");

const con = mysql.createConnection({
    host: config.development.host,
    user: config.development.user,
    password: config.development.password,
    database: config.development.database
});

con.connect((err)=>{
    if(err)console.log(err);
    else console.log("MYSQL CONNECTED");
});

module.exports = con;