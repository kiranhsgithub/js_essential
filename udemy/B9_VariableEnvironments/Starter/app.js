function b() {
    var myVar;
    console.log("inside b : ", myVar);
}

function a(){
    var myVar = 2;
    console.log("inside a : ", myVar);
    b();
}

var myVar = 1;
console.log("outside : ", myVar);
a();
