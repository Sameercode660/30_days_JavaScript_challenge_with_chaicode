// Question: Write a higher order function that takes a function and a number and calls that function that many times.

function greeting() {
    console.log("Hello, Good Morning world")
}


function greetingForNoon() {
    console.log("Hello, Good Afternoon")
}


function caller(fn, num) {
    for(let i = 0; i < num; i++) {
        fn()
    }
}

caller(greeting, 3)