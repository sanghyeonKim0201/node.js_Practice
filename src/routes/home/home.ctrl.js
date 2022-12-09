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
        const id = req.body.id,
        pw = req.body.pw

        const db = require("")
    }
}

module.exports = {
    output,
    process
};