// Question: Write a higher order function that takes two function and a value, applies the first function to the value, and second function to the result.


function square(num) {
    return num ** 2;
}

function quibe(num) {
    return num * num * num;
}

function applies(fn1, fn2, value) {
    
    const result = fn1(value)

    const finalValue = fn2(result)

    console.log(finalValue)

}

applies(square, quibe, 2)