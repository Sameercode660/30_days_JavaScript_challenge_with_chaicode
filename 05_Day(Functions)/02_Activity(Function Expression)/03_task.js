// Question: Write a function expression to find the maximum of two numbers and log the result to the console.

const maximum = function (a, b) {
    if(a > b) {
        return a;
    }
    return b;
}

const result = maximum(1,2);

console.log(result)