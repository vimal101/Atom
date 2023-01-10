const express  = require('express');
const app  =  express();
const bodyparser  = require('body-parser');
const getDateofday    = require('D:/Atom/todolist-v1/views/date.js');
 //console.log(n());
 
 
const mongoose = require('mongoose');

 mongoose.set('strictQuery',false);
 mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});
 


app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public")); 




const itemSchema =new mongoose.Schema({
    name:String
});

const Item = mongoose.model("item",itemSchema); 

const item1  = new Item({
name :"football"
});

const item2  = new Item({
    name :"cricket"
    });
    const  item3 = new Item({
        name :"team"
        });







var items  =["a","b"];
var works  =[];


app.get("/",function(req ,res) {
// var today  =  new Date();
// // var day  = "";
// // if (today.getDay()==0) {
// //  //res.send("its holiday")   
// //  day  = today.getDay(); 
// // } else {
// //    // res.sendFile(__dirname+"/index.html")
// //    day  =  today.getDay();
// // }
  
// // switch (today.getDay()) {
// //     case 0:
// //         day = "sunday";
// //         break;

// //         case 1:
// //             day = "monday";
// //          break;
    
// //         case 2:
// //             day = "tuesday";
// //         break;

// //         case 3:
// //             day = "wednesday";
// //          break;
            
// //         case 4:
// //          day = "thusday";
// //                 break;

// //          case 5:
// //            day = "friday";
// //          break;
                    
// //          case 6:
// //          day = "saturday";
// //         break;
// //     default:
// //         break;
// // }

// var option  ={
//     weekday:"long",
//     day :"numeric",
//     month:"long"
// };
// var day  = today.toLocaleDateString("hi-in",option);

 //let day   = dates();


Item.find({},function(err,founditem){
    
    console.log(founditem.length);
if (founditem.length===0) {
    Item.insertMany([item1,item2,item3],function(err){
        if(err){console.log(err);}else{console.log("insert successfull")}
    });
} else {
    
 const day  = getDateofday.getDate(); // or getday
 res.render("list",{listtitle:day,newitems:founditem});
}

})


})


app.post("/",function(req,res){
    //console.log(req.body);
    if (req.body.button === "work_List") {
        let item  = req.body.item;
    works.push(item);
    res.redirect("/work");
    } else {
        let  n = req.body.item;
   items.push(n);
   res.redirect("/")
    }
    
//     var  n = req.body.item;
//    items.push(n);
//    res.redirect("/")
})



app.get("/work",function(req,res){
    res.render("list",{listtitle:"work_List",newitems:works});
})

app.post("/work",function(req,res){
    let item  = req.body.item;
    works.push(item);
    res.redirect("/work");
})


app.get("/about",function(req,res){
    res.render("about");
})



app.listen(3000,function (){
    console.log("port start3000");
})


















// // we have problem in export the date content to the app.js 
// function getDateofday() {
    
//     let today  =  new Date();
    
    
//     let option  ={
//         weekday:"long",
//         day :"numeric",
//         month:"long"
//     };
//     let day  = today.toLocaleDateString("hi-in",option);
//     return day;
//     }