const http = require('http');

const express = require('express');
const app = express();

let port = 8080;
app.use(express.static(__dirname + '/public'));

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지임');
});
app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/LoginExam.html')
});

const server = http.createServer(app);

server.listen(port, function(){
    console.log('start');
});

