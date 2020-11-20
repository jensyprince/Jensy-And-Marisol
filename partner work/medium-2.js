'use strict';
// has to have the same letters
// checking the number of letters are strings
 // compare user inputs 
var s1 = "Sodarktheconofman"
var s2 = "MadonnaoftheRocks"
// second medium challenge 
// var s1 = "Thingsaregood"
// var s2 = "Dogseatants"
function testAnagram (s1, s2){
 // creating if statments 
    if(!s1 || !s2 || s1.length !== s2.length){return false;}
    var lS1 = s1.toLowerCase();
    var lS2 = s2.toLowerCase();
    if(lS1 === lS2) {return false;}
    var rS1 = lS1.split('').sort().join('');
    var rS2 = lS2.split('').sort().join('');
    return rS1 === rS2;
   }
   var result = testAnagram(s1, s2);
   alert(result);