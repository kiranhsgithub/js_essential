(function () {
    "use strict";
    /*global define */
    /*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */



    var myRegex = /hello/;
    //var myRegex = new RegExp("hello");

    var myString = "Does this sentence have thw word hello in it?";

    var stringWithoutHello = "This will not match regular expression";

    if (myRegex.test(myString)) {
        console.log("\"" + myString + "\" matches regex " + myRegex);
    } else {
        console.log("\"" + myString + "\" doesn't match regex " + myRegex);
    }

    if (myRegex.test(stringWithoutHello)) {
        console.log("\"" + stringWithoutHello + "\" matches regex " + myRegex);
    } else {
        console.log("\"" + stringWithoutHello + "\" doesn't match regex " + myRegex);
    }
}());
