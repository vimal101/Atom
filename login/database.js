
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

exports.connectMongoose=()=>{
    
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true})
.then((e)=>console.log('connected to mongodb")${e.connection.host}'));

};

const userSchema  = new mongoose.Schema({
    name :String,
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:String
});
exports.User = mongoose.model("User",userSchema);