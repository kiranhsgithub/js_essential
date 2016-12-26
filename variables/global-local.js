//to check the impact of global and local variables
//function level scopes

var x = 10;

function newVariable() {
    var x = 11;
    console.log("Variable x : " + x);
    console.log("Global Variable x : " + window.x);
} 

function useGlobalVariable() {
    x = 12;
    console.log("Variable x : " + x);
    console.log("Global Variable x : " + window.x);
}

newVariable();
useGlobalVariable();