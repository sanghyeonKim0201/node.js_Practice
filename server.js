const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function(){
    console.log('start');
});

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지임');
});
app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/LoginExam.html')
});