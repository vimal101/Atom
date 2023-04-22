const express = require('express');
const session = require('express-session');
const { default: mongoose } = require('mongoose');
const app = express();
const ejs = require("ejs");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/user');
const MyDataModel = require('./model/info');
const Post = require('./model/posts');

const notifier = require('node-notifier');


app.set('view engine','ejs');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false
}));


app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());







app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { 
      return next(err); 
      }
    res.redirect('/');
  });
});
app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/submit',function(req,res){
  if (req.isAuthenticated()) {
    res.render('submit');
 
  } else {
    res.redirect('/login');
  }
});


app.post("/submit",function(req,res){
const submitsecret  =  req.body.secret;
console.log(req.user._id);
User.findById(req.user._id,function(err,founduser){
  if(err){
    console.log(err);
  }else{
if(founduser){
  founduser.secret = submitsecret;
  founduser.save(function(){
    res.redirect("/profile");
  })
}
  }
})
});



app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/profile');
});

app.get('/login', function(req, res) {
  res.render('login.ejs');
});

app.get('/register', function(req, res) {
  res.render('register');
});

app.post('/register', function(req, res) {
  User.register(new User({
    username: req.body.username,
    email: req.body.email
  }), req.body.password, function(err) {
    if (err) {
      console.error(err);
      return res.redirect('/register');
    }
    res.redirect('/login');
  });
});

app.get('/profile', function(req, res) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    //res.render('secrets', { user: req.user });
 res.redirect('/post');
  } else {
    res.redirect('/login');
  }
});

app.get('/post',function(req,res){

  
  if (req.isAuthenticated()) {
    Post.find({},function(err,post){
    
      res.render('secrets', { user: req.user,posts:post });
    })
    
 
  } else {
    res.redirect('/login');
  }
})






app.post('/post',function(req,res){
  // console
 // console.log(req.user);
const newMyData = new Post({
  
  title: req.body.tilte,
  content: req.body.content,
  role:"user",
});

newMyData.save((err, savedData) => {
  if (err) {
    console.error(err);
    return;
  }else{
    res.redirect('/profile');
  //console.log('Data saved successfully:', savedData);
// Display a notification
notifier.notify({
  
  message: 'Data saved successfully:'
});
  

    }
});
});


















app.listen(3000, function() {
  console.log('Server started on port 3000');
});
