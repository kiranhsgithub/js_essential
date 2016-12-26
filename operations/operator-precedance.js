var result = 5 + 5 * 10;
//           5 +   50;
//           55

console.log("result of 5 + 5 * 10   : " + result);

result = 5 + 5 === 10;
//        10   === 10
//             true

console.log("result of 5 + 5 === 10 : " + result);

result = 5 + 5 === 10 && 6 + 4 === 11;
//        10   === 10 &&   10  === 11
//             true   &&      false
//                  false

console.log("result of 5 + 5 === 10 && 6 + 4 === 11 : " + result);

result = 5 + 5 === 10 && !6     + 4 === 4;
//        10   === 10 &&  false + 4 === 4
//             true   &&        4   === 4
//             true   &&       true   

console.log("result of 5 + 5 === 10 && !6  + 4 === 4 : " + result);