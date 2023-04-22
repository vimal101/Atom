const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const UserSchema = new mongoose.Schema({
  //username: String ,
   username: {
    type: String,
    required: true,
    unique: true // set the 'unique' option to true to ensure a unique username
  },
  password: String,
  secret: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
