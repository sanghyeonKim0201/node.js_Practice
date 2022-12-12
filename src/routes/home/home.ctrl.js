const db = require("../../../db.js");

const output = {
    home: (req, res)=>{
        res.render("home/index");
    }, 
    login : (req, res) =>{
        res.render("home/login");
    },
    sign:(req, res) =>{
        res.render("home/sign");
    },
};

const process = {
    login: (req, res)=>{
        
        db.query("select * from user where u_id = ? and u_pw = ?", ["qwer", "1234"], (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            if(rows.length > 0){
                for(var i = 0; i < rows.length; i++){
                    console.log(i, rows[i].u_no);
                }
            }
        });
        
    }
}

module.exports = {
    output,
    process
};