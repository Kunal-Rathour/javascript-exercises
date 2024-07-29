const repeatString = function (repeatText, repeatTimes) {
    //Non looping method
    // return repeatText.repeat(repeatTimes);
    //Looping Method
    if (repeatTimes < 0) {
        return "ERROR";
    }
    else {
        let newText = "";
        for (let i = 1; i <= repeatTimes; i++) {
            newText = newText + repeatText;
        }
        return newText;
    }
};
// Do not edit below this line
module.exports = repeatString;
