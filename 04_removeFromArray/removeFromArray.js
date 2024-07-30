const removeFromArray = function () {
    let array = arguments[0];
    // console.log(arguments);

    let index;
    let numberOfElementToRemove = arguments.length - 1;
    for (let i = 1; i <= numberOfElementToRemove; i++) {
        index = array.indexOf(arguments[i]);
        // console.log(array[index]);
        while (array.includes(arguments[i])) {
            array.splice(index, 1);
        }
    }
    return array;

};
console.log(removeFromArray([1, 2, 3, 4, 5, 6], 2));
// Do not edit below this line
module.exports = removeFromArray;
