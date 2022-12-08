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
        console.log(req.body);
    }
}

module.exports = {
    output,
    process
};