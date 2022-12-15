const http = require("http");
const app = require("../app.js");
const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, ()=>{
    console.log(`${PORT} 포트에서 서버 실행중`);
});
