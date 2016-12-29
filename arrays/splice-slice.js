var phrase = ['H','e','l','l','o','W','o','r','l','d','!'];

var afterSlice = phrase.slice(5,11);

console.log("After slice");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSlice);

var afterSplice = phrase.splice(5,5);

console.log("After splice");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSplice);