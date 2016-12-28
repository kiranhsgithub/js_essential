var x = 5, y = "10";

function add(x, y){
    if(isFinite(x) && isFinite(y)){
        var simpleAddition = x + y;
        var additionAfterParsing = parseInt(x) + parseInt(y);
        console.log("simpleAddition : " + simpleAddition);
        console.log("additionAfterParsing : " + additionAfterParsing);
    } else {
        console.log("Invalid Numbers");
    }
}

add(x, y);