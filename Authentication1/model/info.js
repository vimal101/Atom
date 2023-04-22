const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const myDataSchema  = new mongoose.Schema({
  title: String,
  content: String,
  
});

myDataSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('MyData', myDataSchema );
