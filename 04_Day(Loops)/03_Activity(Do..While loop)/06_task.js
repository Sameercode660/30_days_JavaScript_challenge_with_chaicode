// Question: Write a program to calculate factorial of a number.


let factorial = 1;
let number = 5;

do{
    factorial *= number;
    number--;
}while(number >= 1)

console.log(factorial)