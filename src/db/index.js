const mysql = require("mysql");
const dotenv = require("dotenv");
const config = require("../config/config.js");

dotenv.config();

const con = mysql.createConnection(config[process.env.NODE_ENV || 'development']);

con.connect((err)=>{
    if(err){
        console.error(`error connecting: ${err.stack}`);
        throw err;
        return;
    }
    console.log("MYSQL CONNECTED");
}); 

module.exports = con;
