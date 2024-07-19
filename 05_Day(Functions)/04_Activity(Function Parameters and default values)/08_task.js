// Question: Write a function that takes a person's name and age and returns a greeting message, provide a default value for age.


function greeting(name, age = 18) {
    return `Hello, ${name}, Good Morning! Happy to know that you are ${age} years old`
}

const result = greeting("Mohd Sameer")

console.log(result)