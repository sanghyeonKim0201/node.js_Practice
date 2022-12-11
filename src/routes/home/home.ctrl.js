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
        db.con.query("select * from user where id = ? and pw = ?", [req.body.id, req.body.pw], (err, rows, fields)=>{
            if(err){
                console.log(err);
            }

            if(rows.length > 0){
                for(var i = 0; i < rows.length; i++){
                    console.log(rows[i].id + ", " + rows[i].pw);
                }
            }
        })
        
    }
}

module.exports = {
    output,
    process
};