var phrase = 'HelloWorld!';

var afterSubstring = phrase.substring(5,11);

console.log("After substring");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSubstring);

var afterSubstr = phrase.substr(5,5);//unlike splice in case of array, this doesn't change original array

console.log("After substr");
console.log("Original phrase : " + phrase);
console.log("New Phrase      : " + afterSubstr);