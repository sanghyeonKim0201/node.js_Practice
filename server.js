const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('염해찬 병신');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 페이지임');
});