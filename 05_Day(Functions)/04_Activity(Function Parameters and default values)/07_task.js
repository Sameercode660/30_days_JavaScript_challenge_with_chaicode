// Question: Write a function that returns the product of two numbers,Provide a default value to second number


function product (num1, num2 = 2) {
    return num1 * num2
}

const result = product(4)

console.log(result)