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

const user = {
    id: ["qwer", "asdf", "zxcv"],
    pw: ["1234", "5678", "9101"]
};

const process = {
    login: (req, res)=>{
        const id = req.body.id,
        pw = req.body.pw

        if(user.id.includes(id) && user.pw.includes(pw)){
           
        }else{
           console.log 
        }
    }
}

module.exports = {
    output,
    process
};