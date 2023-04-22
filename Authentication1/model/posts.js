const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    
    role: String,
  });
  
  module.exports = mongoose.model('Post', postSchema);
  
  
  
  