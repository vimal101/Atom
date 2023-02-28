//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app  = express();
const encrypt = require("mongoose-encryption");
mongoose.set('strictQuery', true);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const userSchema = new mongoose.Schema( {
  email:String,
  password:String
});
 
//console.log(process.env.SECRET);
userSchema.plugin(encrypt, { secret: process.env.SECRET,encryptedFields: ['password'] });
const User = new mongoose.model("User",userSchema);

app.get("/",function(req,res){
  res.render("home.ejs");
});


app.get("/login",function(req,res){
  res.render("login");
});
app.post("/login",function(req,res){
  const username  =  req.body.username;
  const password = req.body.password;
  User.findOne({email:username},function(err,result){
    if(err){
      console.log(err);

    }else{
      if(result.password===password){
        res.render("secrets.ejs");
      }
    }
  })
});



app.get("/register",function(req,res){
  res.render("register");
});
app.post("/register",function(req,res){
  const newuser = new User({
    email:req.body.username,
    password:req.body.password
  });
  newuser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets.ejs");
    }
  })
})




app.listen(3000,function(){
  console.log("server started on port 3000");
});
