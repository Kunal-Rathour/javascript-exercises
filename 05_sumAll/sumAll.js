const sumAll = function (num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0 || num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }
    else {
        // using formula Sum=n/2((first+last)/difference)
        // last=first+(n-1)d => n = last-first+1
        if (num1 < num2) {
            first = num1;
            last = num2;
        }
        else {
            first = num2;
            last = num1;
        }
        let n = last - first + 1;
        let sum = (n / 2) * (first + last);
        // let sum = 0;
        // for (let i = first; i <= last; i++) {
        //     sum += i;
        // }
        return sum;
    }
}
console.log(sumAll(1, 5))
// Do not edit below this line
module.exports = sumAll;
