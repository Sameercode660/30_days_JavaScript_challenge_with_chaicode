// Question: Write a function to check whether a number is even or odd

function checkEvenOrOdd(num) {
    if(num % 2 == 0) {
        return true
    }
    return false
}


const num = 19

const result = checkEvenOrOdd(num)

if(result) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}
