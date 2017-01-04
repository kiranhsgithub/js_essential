(function () {
    "use strict";
    /*global define */
    /*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */



    var regex = /hello/;
    //var regex = new RegExp("hello");

    var str1 = "Does this sentence have the word hello in it?";

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
    
    var myStr1 = "helo";
    var myStr2 = "hello";
    var myStr3 = "helllllllo";
    var myStr4 = "hellso";
    var myStr5 = "heo";
    
    
    console.log("Regex: " + oneOrMoreCharOccurrenceExp);
    console.log("Regex: " + zeroOrMoreCharOccurrenceExp);
    console.log("Regex: " + zeroOrOneCharOccurrenceExp);
    
    console.log(myStr1 + " match " + oneOrMoreCharOccurrenceExp.test(myStr1));
    console.log(myStr1 + " match " + zeroOrMoreCharOccurrenceExp.test(myStr1));
    console.log(myStr1 + " match " + zeroOrOneCharOccurrenceExp.test(myStr1) + "\n");
    
    console.log(myStr2 + " match " + oneOrMoreCharOccurrenceExp.test(myStr2));
    console.log(myStr2 + " match " + zeroOrMoreCharOccurrenceExp.test(myStr2));
    console.log(myStr2 + " match " + zeroOrOneCharOccurrenceExp.test(myStr2) + "\n");
    
    console.log(myStr3 + " match " + oneOrMoreCharOccurrenceExp.test(myStr3));
    console.log(myStr3 + " match " + zeroOrMoreCharOccurrenceExp.test(myStr3));
    console.log(myStr3 + " match " + zeroOrOneCharOccurrenceExp.test(myStr3) + "\n");
    
    console.log(myStr4 + " match " + oneOrMoreCharOccurrenceExp.test(myStr4));
    console.log(myStr4 + " match " + zeroOrMoreCharOccurrenceExp.test(myStr4));
    console.log(myStr4 + " match " + zeroOrOneCharOccurrenceExp.test(myStr4) + "\n");
    
    console.log(myStr5 + " match " + oneOrMoreCharOccurrenceExp.test(myStr5));
    console.log(myStr5 + " match " + zeroOrMoreCharOccurrenceExp.test(myStr5));
    console.log(myStr5 + " match " + zeroOrOneCharOccurrenceExp.test(myStr5) + "\n");
    
    var eitherHelloOrBye = /hello|bye/;    
    
    var str3 = "Just to say bye!";
    
    console.log("Regex: " + eitherHelloOrBye);
    console.log(str1 + " match " + eitherHelloOrBye.test(str1));
    console.log(str2 + " match " + eitherHelloOrBye.test(str2));
    console.log(str3 + " match " + eitherHelloOrBye.test(str3) + "\n");
    
    var anyCharExp = /he..o/;
    var testStr = "heppo";
    var testStr2 = "heo";
    var testStr3 = "he12o";
    var testStr4 = "helo";
    
    console.log("Regex: " + anyCharExp);
    console.log(testStr + " match " + anyCharExp.test(testStr));
    console.log(testStr2 + " match " + anyCharExp.test(testStr2));
    console.log(testStr3 + " match " + anyCharExp.test(testStr3));
    console.log(testStr4 + " match " + anyCharExp.test(testStr4) + "\n");
    
    var alphaNumbericCharExp = /\wello/;
    
    testStr = "hello";
    testStr2 = "12ello";
    testStr3 = "_ello";
    testStr4 = "#ello";
    
    console.log("Regex: " + alphaNumbericCharExp);
    console.log(testStr + " match " + alphaNumbericCharExp.test(testStr));
    console.log(testStr2 + " match " + alphaNumbericCharExp.test(testStr2));
    console.log(testStr3 + " match " + alphaNumbericCharExp.test(testStr3));
    console.log(testStr4 + " match " + alphaNumbericCharExp.test(testStr4) + "\n");
    
    var wordBoundaryExp = /\bhello/;
    
    testStr = "hello";
    testStr2 = "\nhello";
    testStr3 = "\thello";
    testStr4 = "phello";
    
    console.log("Regex: " + wordBoundaryExp);
    console.log(testStr + " match " + wordBoundaryExp.test(testStr));
    console.log(testStr2 + " match " + wordBoundaryExp.test(testStr2));
    console.log(testStr3 + " match " + wordBoundaryExp.test(testStr3));
    console.log(testStr4 + " match " + wordBoundaryExp.test(testStr4) + "\n");
    
    var charRangeExp = /[crnld]ope/;
    
    testStr = "nope";
    testStr2 = "hope";
    testStr3 = "crope";
    testStr4 = "pope";
    var testStr5 = "_ope";
    
    console.log("Regex: " + charRangeExp);
    console.log(testStr + " match " + charRangeExp.test(testStr));
    console.log(testStr2 + " match " + charRangeExp.test(testStr2));
    console.log(testStr3 + " match " + charRangeExp.test(testStr3));
    console.log(testStr4 + " match " + charRangeExp.test(testStr4));
    console.log(testStr5 + " match " + charRangeExp.test(testStr5) + "\n");
    
    
    
}());
