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

// con.query("select * from user where u_id = ? and u_pw = ?", ["qwer", "1234"], (err, rows, fields)=>{
//     if(err){
//         console.log(err);
//     }
//     if(rows.length > 0){
//         for(var i = 0; i < rows.length; i++){
//             console.log(i, rows[i].u_no);
//         }
//     }
// });

module.exports = con;