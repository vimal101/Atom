const ex =  require("express");
const bodyparser = require("body-parser");

const app  = ex();
app.use(bodyparser.urlencoded({ extended:true}))


/*app.get("/",function(req,res){
    res.send("hello world");
})
*/
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    //check content of the body post method
   
    // console.log(req.body);
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var num3 = num1+num2;

    res.send("here is the answer  "+num3)
})

app.listen(3000,function(){
    console.log("server start at 3000");
})