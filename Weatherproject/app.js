const express  =  require('express');
const app = express();
const https  =  require("https");
const bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended:true}));

app.get("/" , function(req,res){
res.sendFile(__dirname+"/index.html");
   
})


app.post("/",function(req,res){
 
   console.log( req.body.cityfind);

 const q = req.body.cityfind;
    const key = "f30da7cfbc4d2e0bebaf9e2c65556f53";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+q+"&appid="+key+"&units=metric";
   const url1 = "https://api.openweathermap.org/data/2.5/weather?lat=25.7&lon=82.68&appid=f30da7cfbc4d2e0bebaf9e2c65556f53&units=metric"
    https.get(url,function(respond){
        console.log(respond);
        respond.on("data",function(data){
            console.log(data);
            const  weatherdata  = JSON.parse(data);
            const temp =weatherdata.main.temp;
            const name =weatherdata.name;
            
           // console.log(weatherdata); 
            console.log(temp);
            console.log(name);
            //console.log(weatherdata);

            res.write("the temp of "+name );
            res.write(" is "+ temp+" celcius");
            res.send();
        })
    })

    

})


app.listen(3000,function(){
console.log("server start at 3000 you can build it");
})
