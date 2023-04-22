const express = require("express");
const {connectMongoose,User} = require("./database.js");
const app  = express();
const ejs  = require("ejs");


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index.ejs");
});



app.get("/register",function(req,res){
    res.render("register.ejs");
});


app.get("/login",function(req,res){
    res.render("login.ejs");
});


app.post("/register",async(req,res)=>{
    const user = await User.findOne({username:req.body.username});
if(user) return res.status(400).send("User already exist");
const newUser  = await User.create(req.body);
res.status(201).send(newUser);
});


app.listen(3000,function(){
  console.log("server started on port 3000");
});
