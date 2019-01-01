// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let largest = inputArray.reduce((longest, str) => str.length > longest ? str.length : longest, 0);
    return inputArray.filter(str => str.length === largest);
}