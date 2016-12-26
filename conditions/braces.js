function check() {
    var x = Math.floor(Math.random() * 10) + 1;

    if(x < 5)
        console.log("x = " + x + ", x less than 5");
        //console.log("next statement"); //uncomment this line
    else if(x == 5)
        console.log("x = " + x + ", x is equal to 5");
    else
        console.log("x = " + x + ", x greater than 5");
    
    if(x < 6) {
        console.log("x = " + x + ", x less than 6");
        //console.log("next statement"); //uncomment this line
    } else if(x == 6) {
        console.log("x = " + x + ", x is equal to 6");
    } else {
        console.log("x = " + x + ", x greater than 6");
    }
}

check();


