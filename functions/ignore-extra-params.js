var x = 5, y = 10;

var name = "Some One";

function add(x, y){
    var sum = x + y;
    console.log(" sum = " + sum);
    //Ignores any addditional params passed
}

add(x, y, name);