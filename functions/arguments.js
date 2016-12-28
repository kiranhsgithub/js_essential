function add(){
    var result = 0;
    for(var index in arguments){
        console.log("index : " + index);
        if(isFinite(arguments[index])){
            result+= arguments[index];
        }
    }
    return result;
}

function add2() {
    var result = 0;
    
    //this conversion is necessary as arguments is an object and not an array
    //arguments has only length property and does not jave other methods
    //like slice, forEach etc
    var args = [].slice.call(arguments);  
    
    //for .. of is ES6 syntax - may not be supported in few browsers
    for(var element of args){
        if(isFinite(element)){
            result+= element;
        }
    }
    return result;
}

function add3() {
    var result = 0;
    
    var args = [].slice.call(arguments);
    args.forEach(function(element) {
        if(isFinite(element)){
            result+= element;
        }
    });
    return result;
}



console.log(" add(1,2,3) = " + add(1,2,3));
console.log(" add2(1,2,3) = " + add2(1,2,3));
console.log(" add3(1,2,3) = " + add3(1,2,3));