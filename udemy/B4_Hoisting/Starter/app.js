b();
console.log(a);
//c();

var a = 'Hello World!';

function b() {
    console.log("Called b!");
}

var c = function() {
    console.log("Called c!");
}
c();
b();
console.log(a);