// const reverseString = function () {

// };
function reverseString(stringToReverse) {
    let reversedString = "";
    stringLength = stringToReverse.length;
    for (let i = 0; i <= stringLength - 1; i++) {
        reversedString += stringToReverse[stringLength - i - 1];
    }
    return reversedString;
    // reverseString = reverseString + reverseString(stringToReverse[stringLength - 1]);
    // return reverseString[stringLength - 1];
}
console.log(reverseString("HELLO"));
// Do not edit below this line
module.exports = reverseString;
