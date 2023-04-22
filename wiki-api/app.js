const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app  = express();

mongoose.set('strictQuery', true);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});
const articleSchema =new mongoose.Schema({
  title:String,
  content:String
});
const Article = mongoose.model("Article",articleSchema);


//
// app.get("/articles",function(req,res){
// Article.find(function(err,result){
//   console.log(result);})
// });
//
//
// app.post("/articles",function(req,res){
// const newArticles  = new Article({
//   title:req.body.title,
//   content:req.body.content
// });
// newArticles.save(function(err){
//   if (err) return handleError(err);
//   else{
//     res.send("successfully added");
//   }
// })
// });
//
//
//
// app.delete("/articles",function(req,res){
// // Article.deleteOne({_id:'63fb952b484f8ef41e58d6b8'},function(err){
// //   if(err) return handleError;
// //   else{
// //     res.send("successfully deleted");
// //   }
// // })
//
// Article.deleteMany(function(err){
//   if(err) return handleError;
//   else{
//     res.send("successfully deleted");
//   }
// })
// });



app.route("/articles")

.get(function(req,res){
Article.find(function(err,result){
  console.log(result);})
})

.post(function(req,res){
const newArticles  = new Article({
  title:req.body.title,
  content:req.body.content
});
newArticles.save(function(err){
  if (err) return handleError(err);
  else{
    res.send("successfully added");
  }
})
})

.delete(function(req,res){
Article.deleteMany(function(err){
  if(err) return handleError;
  else{
    res.send("successfully deleted");
  }
})
});

/////////////////////////////////////////////////////targetting specific route////////////////////////////////////////////////////////////////////////////////////

app.route("/articles/:articletitle")
.get(function(req,res){
  Article.findOne({title:req.params.articletitle},function(err,result){
    res.send(result);
  })
})
.put(function(req,res){
  Article.updateOne({title:req.params.articletitle},
    {title:req.body.title,content:req.body.content},
  function(err){
    if(!err) res.send("successfully Update");

  })
})
.delete(function(req,res){
  Article.deleteOne({title:req.params.articletitle},function(err){
    if(!err){
      res.send("successfully deleted");
    }
  })
})
;


app.listen(3000,function(){
  console.log("server started on port 3000");
});
