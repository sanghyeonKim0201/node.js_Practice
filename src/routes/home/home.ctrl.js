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
        
        db.query("select * from user where u_id = ? and u_pw = ?", [req.body.id, req.body.pw], (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            if(rows.length > 0){
                return res.json({
                    success: true,
                    msg: "로그인에 성공하였습니다",
                    u_no: rows[0].u_no
                });
            }
            return res.json({
                success: false,
                msg: "id 또는 pw가 올바르지 않습니다"
            });
            
        });
        
    },
    sign: (req, res)=>{

        if(req.body.pwcheck !== req.body.pw){
            return res.json({
                success: false,
                msg: "비밀번호와 비밀번호 체크가 맞지 않습니다"
            });
        }

        db.query("select * from user where u_id = ?", [req.body.id], (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            if(rows.length > 0){
                return res.json({
                    success: false,
                    msg: "아이디가 존재합니다"
                });
            }
            res.json({
                success: true,
                msg: "회원가입 완료"
            })
            
        });

        db.query("insert into user values(0, ?,?,?,?,?)", [req.body.id, req.body.pw, req.body.name, req.body.phone, req.body.email], (err, result, fields)=>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = {
    output,
    process
};