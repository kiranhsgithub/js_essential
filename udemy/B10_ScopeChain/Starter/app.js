function b() {
	console.log("inside b: ",myVar);
}

function a() {
	var myVar = 2;
	b();
    
    function c() {
        console.log("inside c:",myVar);
    }
    c();
    console.log("inside a:",myVar);
    
}

var myVar = 1;
a();
console.log("outside:",myVar);

