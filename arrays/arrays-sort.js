var fruits = ['Mango', 'Apple', true, false, 'Banana','Watermelon',9,1, {name: "John"}, {"age": 28},[5,4,3,1],[3,2,3],['Pineapple','Grape','Orange'],['Mango','Apple','Banana'],[{name: "Doe"}, {"age": 18}],undefined, null, 4/0, -4/0, 'r' * 6, [null,1,"Jack",{age: 12}],["Dawson",5,{year: 2012}],[{id: 3003}, 'Rose', 14]];
console.log("Before sort: " + JSON.stringify(fruits));

for(var i=0; i <fruits.length; i ++){
    console.log(" fruits[" + i +"] = " + JSON.stringify(fruits[i]));
}
fruits.sort();
console.log("After sort: " + JSON.stringify(fruits));
for(var i=0; i <fruits.length; i ++){
    console.log(" fruits[" + i +"] = " + JSON.stringify(fruits[i]));
}