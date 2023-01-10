
// const n = "vimal";
// module.exports  = n;

module.exports.getDate = getDate;


function getDate() {
    
let today  =  new Date();


let option  ={
    weekday:"long",
    day :"numeric",
    month:"long"
};
let day  = today.toLocaleDateString("hi-in",option);
return day;
}



module.exports.getday = getday;
function getday() {
    
    let today  =  new Date();
    
    
    let option  ={
        weekday:"long"
    };
    let day  = today.toLocaleDateString("hi-in",option);
    return day;
    }