"use strict";

const { query } = require("../db/index.js");
const con = require("../db/index.js");

const User = (user)=>{
    this.u_no = user.u_no;
    this.u_id = user.u_id;
    this.u_pw = user.u_pw;
    this.u_name = user.u_name;
    this.u_phone = user.u_phone;
    this.u_email = user.u_email;
};

User.findAll = (result)=>{
    con.createQuery("select * from user", (err, res)=>{
        if(err){
            console.log(`Err: ${err}`);
            result(null, err);
        }else{
            console.log("user : ", res);
            result(null, res);
        }
    });
};

User.findUser = (sql, val, result) =>{
    con.createQuery(sql, val, (err, res)=>{
        if(err){
            console.log(`Err: ${err}`);
            result(err, null);
        }else{
            console.log("user : ", res);
            result(null, res);
        }
    });
};

module.exports = User;