const nodemailer = require('nodemailer');

const email = {
    "host":"",
    "port":"",
    "secure":false,
    "auth":{
        "user":"",
        "pass":""
    }
};

const send = async(Option)=>{
    nodemailer.createTransport(email).sendMail(Option, (error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let data = {
    from : ''
}