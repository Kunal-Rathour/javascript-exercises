function fibonacci() {
    if (parseInt(arguments[0]) == 0) {
        return 0;
    }
    else if (parseInt(arguments[0]) < 0) {
        return "OOPS";
    }
    else {
        let a = 0;
        let b = 1;
        let fib = 0;
        for (let i = 0; i < parseInt(arguments[0]); i++) {
            a = fib;
            fib = fib + b;
            b = a;
        }
        return fib;
    }
    // return count;
}
// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(6))