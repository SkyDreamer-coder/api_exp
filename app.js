const express = require('express');
const cors = require('cors');

const Port = process.env.Port || 5000;

const app = express();

app.use(cors());

const middleware = function(req,res,next){
    console.log(" yeni bir istek geldi..");
    next();
}

const Post_middleware = function(req,res,next){
    console.log("Post iseği için istek gönderildi");
    next();
}

app.get("/hello",middleware,function(req,res) {
    res.send("Merhaba, GET isteği attınız ");
});

app.post("/hello",middleware,Post_middleware,function(req,res){
    res.send("Merhaba, POST isteği attınız");
});

app.put("/hello",middleware,function(req,res){
    res.send("Merhaba, PUT isteği attınız");
});

app.delete("/hello",middleware,function(req,res){
    res.send("Merhaba, DELETE isteği attınız");
});

app.listen(Port, () => {
    console.log("Ready on http://localhost:" + Port);
  });