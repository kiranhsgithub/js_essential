(function () {
    "use strict";
    /*global define */
    /*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */



    var regex = /hello/;
    //var regex = new RegExp("hello");

    var str1 = "Does this sentence have thw word hello in it?";

    var str2 = "This will not match regular expression";

    if (regex.test(str1)) {
        console.log("\"" + str1 + "\"        MATCHES regex " + regex);
    } else {
        console.log("\"" + str1 + "\"        DOESN'T match regex " + regex);
    }

    if (regex.test(str2)) {
        console.log("\"" + str2 + "\"        MATCHES regex " + regex);
    } else {
        console.log("\"" + str2 + "\"        DOESN'T match regex " + regex);
    }
    
    var startExp = /^This/;
    
    if (startExp.test(str1)) {
        console.log("\"" + str1 + "\"        STARTS with " + startExp);
    } else {
        console.log("\"" + str1 + "\"        DOESN'T start with " + startExp);
    }
    
    if (startExp.test(str2)) {
        console.log("\"" + str2 + "\"        STARTS with " + startExp);
    } else {
        console.log("\"" + str2 + "\"        DOESN'T start with " + startExp);
    }
    
    var endExp = /it\?$/;
    
    if (endExp.test(str1)) {
        console.log("\"" + str1 + "\"        ENDS with " + endExp);
    } else {
        console.log("\"" + str1 + "\"        DOESN'T end with " + endExp);
    }
    
    if (endExp.test(str2)) {
        console.log("\"" + str2 + "\"        ENDS with " + endExp);
    } else {
        console.log("\"" + str2 + "\"         DOESN'T end with " + endExp);
    }
   
    var oneOrMoreCharOccurrenceExp = /hel+o/;
    var zeroOrMoreCharOccurrenceExp = /hel*o/;
    var zeroOrOneCharOccurrenceExp = /hel?o/;
    
    str1 = "helo";
    str2 = "hello";
    var str3 = "helllllllo";
    var str4 = "hellso";
    var str5 = "heo";
    
    
    console.log("Regex: " + oneOrMoreCharOccurrenceExp);
    console.log("Regex: " + zeroOrMoreCharOccurrenceExp);
    console.log("Regex: " + zeroOrOneCharOccurrenceExp);
    
    console.log(str1 + " match " + oneOrMoreCharOccurrenceExp.test(str1));
    console.log(str1 + " match " + zeroOrMoreCharOccurrenceExp.test(str1) + "\n");
    console.log(str1 + " match " + zeroOrOneCharOccurrenceExp.test(str1) + "\n");
    
    console.log(str2 + " match " + oneOrMoreCharOccurrenceExp.test(str2));
    console.log(str2 + " match " + zeroOrMoreCharOccurrenceExp.test(str2) + "\n");
    console.log(str2 + " match " + zeroOrOneCharOccurrenceExp.test(str2) + "\n");
    
    console.log(str3 + " match " + oneOrMoreCharOccurrenceExp.test(str3));
    console.log(str3 + " match " + zeroOrMoreCharOccurrenceExp.test(str3) + "\n");
    console.log(str3 + " match " + zeroOrOneCharOccurrenceExp.test(str3) + "\n");
    
    console.log(str4 + " match " + oneOrMoreCharOccurrenceExp.test(str4));
    console.log(str4 + " match " + zeroOrMoreCharOccurrenceExp.test(str4) + "\n");
    console.log(str4 + " match " + zeroOrOneCharOccurrenceExp.test(str4) + "\n");
    
    console.log(str5 + " match " + oneOrMoreCharOccurrenceExp.test(str5));
    console.log(str5 + " match " + zeroOrMoreCharOccurrenceExp.test(str5) + "\n");
    console.log(str5 + " match " + zeroOrOneCharOccurrenceExp.test(str5) + "\n");
    
}());
