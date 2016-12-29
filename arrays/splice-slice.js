var phrase = ['H','e','l','l','o','W','o','r','l','d','!'];

var afterSlice = phrase.slice(5,11);

console.log("After slice");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSlice);

var afterSplice = phrase.splice(5,6);//unlike substr in case of strings, this  changes original array

console.log("After splice");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSplice);