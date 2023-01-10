const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true});


const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please check weather the data will be their"]
    },
    rating: {
        type:Number,
        min:0,
        max:10
    },
    review: String
  });
  
  const Fruit = mongoose.model("Fruit", fruitSchema);
  
  const fruit = new Fruit({
      name: "Apple",
      rating: 7,
      review: "Taste Good"
  });
  

  const kiwi = new Fruit({
    name: "kiwi",
    rating: 7,
    review: "kiwi Good"
});


const grapes = new Fruit({
    name: "grapes",
    rating: 7,
    review: "grapes grapes"
});




//insert one at a time 
 //fruit.save();
grapes.save();


//insert to many at same time  
// Fruit.insertMany([kiwi,grapes],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully insert:");
//     }
// })



// Fruit.updateOne({_id:"63b73b5fc1e6957ee228f87a"},{name:"vimal1"},function(err){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("successfully updated:");
//     }
// })


//Fruit.deleteOne({_id:"63b73b5fc1e6957ee228f87a"},function(err){console.log(err)});



Fruit.find(function(err,fruit){
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruit.forEach(function(f){
            console.log(f.name); 
        })
      //console.log(fruit);
    }
    
})


















 const personSchema = new mongoose.Schema({
    name: String,
    age:Number,
    favouritefruit:fruitSchema
  });
  
  const Person = mongoose.model("person", personSchema);
  
  const person = new Person({
      name: "singh",
      age:"21",
      favouritefruit: kiwi
     
  });
  
  person.save();

