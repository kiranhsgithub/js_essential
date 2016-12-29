var dateOne = new Date(2000,0,1);
var dateTwo = new Date(2000,0,1);

console.log("Date object direct comparison");
if(dateOne == dateTwo){
    console.log("ARE equal");
}else {
    console.log("are NOT equal");
}


console.log("Date comparison using getTime() method");
if(dateOne.getTime() == dateTwo.getTime()){
    console.log("ARE equal");
}else {
    console.log("are NOT equal");
}

dateOne = new Date(2000,0,1);//evaluates to new Date(2000,0,1,0,0,0,0);
dateTwo = new Date(2000,0,1,0,0,0,1);

console.log("Greater than and less than");
if(dateOne < dateTwo){
    console.log("dateOne less than dateTwo");
}else if(dateOne > dateTwo){
    console.log("dateOne greater than dateTwo");
}else{
    console.log("Dates are equal");
}