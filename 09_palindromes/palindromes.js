const palindromes = function () {
    let simplifiedString = arguments[0].replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").toLowerCase();
    simplifiedString = simplifiedString.replace(" ", "").split(" ").join("");
    // return simplifiedString;
    return simplifiedString === (simplifiedString.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
