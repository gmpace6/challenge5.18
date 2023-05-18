// Smallest Difference

// Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

// This is a short-length challenge, but requires some clever thinking.
// Given two lists, find the smallest difference (subtraction) between any two nums.
// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

// define 2 arrays
// loop through arr1, subtract each [i] in arr2 from first number in arr1
// repeat for num 2, etc
// push absolute value of each difference to answerArr
// sort answerArr asc
// return answerarray.1

let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]
let answerArr = []

function smallestDiff(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++)
    for(let j = 0; j < arr2.length; j++)
        answerArr.push(Math.abs(arr1[i] - arr2[j]))
    return answerArr.sort()
}
console.log(smallestDiff(arr1, arr2))


// function smallestDiff(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++)
//     for(let j = 0; j < arr2.length; j++)
//         answerArr.push(Math.abs(arr1[i] - arr2[j]))
//         answerArr.sort(function(a, b) {
//             return a - b
//         })
//     return answerArr
// }
// console.log(smallestDiff(arr1, arr2))

