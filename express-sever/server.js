const express = require('express');
const app = express();
app.get("/",function(req,respond){
//console.log(req);
respond.send("hello world on server");
})

app.get("/about",function(req,res){
    res.send("you are in about page:");
})

app.get("/contect",function(req,res){
    res.send("you are in contect page:");
})


app.listen(3000,function(){
    console.log("server startedon port 3000");
});