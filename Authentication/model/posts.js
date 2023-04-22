const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://singhvimal2002:Vimal%40123@cluster0.aj4n2xh.mongodb.net/test",{useNewUrlParser:true});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    
    role: String,
  });
  
  module.exports = mongoose.model('Post', postSchema);
  
  
  
  