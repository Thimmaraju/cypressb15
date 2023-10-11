// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("fizzbuzz");
//     }
//     else if (i % 5 == 0) {
//         console.log("buzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("fizz");
//     }
//     else {
//         console.log(i);
//     }
// }


// function isAnagram(a, b) {
//     str1 = a.toLowerCase().split("").sort().join("")
//     str2 = b.toLowerCase().split("").sort().join("")

//     if (str1 == str2) {
//         console.log("Given strings are anagram")
//     }
//     else {
//         console.log("Given strings are not anagram")
//     }
// }


// isAnagram("listen", "silent")

// function isPal(str) {
//     var a = str.split("").reverse().join("")

//     if (str == a) {
//         console.log("Given String is palindrome")
//     }
//     else {
//         console.log("Given string is not palindrome")

//     }

// }


// isPal("anna")


// var a = 10, b = 20
// b = b - a
// a = a + b
// console.log(a, b)


// function countCharacters(str) {
//     const charCount = {};

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     return charCount;
// }

// const inputString = "Thimmaraju";
// const result = countCharacters(inputString);
// console.log(result);


// reverse the string 

// Raju 

// uajR

// stringgiven = "Raju"

// reversedstring = stringgiven.split("").reverse().join("")

// console.log(reversedstring)


// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString('hello');

// var x= [1,4,5,9,8,3]
// var y = x.sort()
// var secondlargetnumber =  y[y.length-2]
// console.log(secondlargetnumber)
// var indexofseclarge = x.indexOf(secondlargetnumber)
// console.log(indexofseclarge)

// number = 100110011

// str = String(100110011)
// var count = 0
// var count2 = 0
// for (let i = 0; i <= str.length; i++) {
//     if (str[i] == 1) {
//         count = count + 1
//     }
//     if (str[i] == 0) {
//         count2 = count2 + 1
//     }
// }

// console.log(count)

// console.log(count2)
//============================
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// // Example usage
// console.log(evenOrOdd(8));
// console.log(evenOrOdd(11));
//==============================================
// function removeduplicharacter(str) {
//     var answer = "";
//     var freq = [];
//     for (i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1
//             answer = answer + char;
//         }
//     }

//     return answer;
// }

// console.log(removeduplicharacter("Thimmaraju"))
//=========================================================

// array1 = ["a","b","c", "d", "e"]

// array2 =["1","2"]

// output = ["a","1","b","2","c","d", "e"]


//or

// array1 = ["a","b","c", "d", "e"]

// array2 =["1","2","3","4","5", "6","7"]

// output = ["a","1","b","2","c","3",d","4", "e","5","6","7"]

// var arr1len = array1.length

// var arr2len = array2.length

// var output = []

// var len = array1.length > array2.length ? array1.length : array2.length

// console.log(len)

// for (let i = 0; i < len; i++) {

//     if (i < array1.length) {

//         output.push(array1[i])

//     }

//     if (i < arr2len) {
//         output.push(array2[i])
//     }

// }

// console.log(output) 

//========================================


// function reverseInt(int){
//     let intRev = "";
//     let start = int < 0 ? 1 : 0;
//     for (let i=start; i<int.length; i++) {
//         intRev = int[i] + intRev;
//     }
//     return int < 0 ? '-' + intRev : intRev;
// }

// console.log("12345 in reverse is:  " + reverseInt("12345"));
// console.log("-12345 in reverse is: " + reverseInt("-12345"));

//===================================================

// const str = "big black bug bit a big black dog on his big black nose";
// const findDuplicateWords = str => {
//     const strArr = str.split(" ");
//     const res = [];
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
//             if (!res.includes(strArr[i])) {
//                 res.push(strArr[i]);
//             };
//         };
//     };
//     return res.join(" ");
// };
// console.log(findDuplicateWords(str));
//----------------------------------------------------------
// const date = new Date();

// // get the date as a string
// const n = date.toDateString();

// // get the time as a string
// const time = date.toLocaleTimeString();

// // display date
// console.log('Date: ' + n);

// // display time
// console.log('Time: ' + time);

//===================================================================


const str = "big black bug bit a big black dog on his big black nose";

arr = str.split(" ")
console.log(arr)

finalstr = ''

for (i = 0; i <= arr.length - 1; i++) {

    var str2 = arr[i].split("").reverse().join("");

    finalstr = finalstr + " " + str2
}

console.log(finalstr.trim())