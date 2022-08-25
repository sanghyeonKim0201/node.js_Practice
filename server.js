const express = require('express');
const app = express();
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const appRoot = require('app-root-path'); 

let port = 8080;
app.use(express.static(__dirname + '/public'));

const server = app.listen(port, ()=>{
    console.log('start');
});

app.get('/beauty', (req, res) =>{
    res.send('뷰티용품 쇼핑 페이지임');
});

app.get('/', (req,res)=>{
    res.sendfile(__dirname + '/public/LoginExam.html')
});