// Question: Write a program to check if a year is leap year using multiple conditions (divisible by 4, but not by 100 unless also divisible by 400) and log the result to the console.

const year = 2023;

if(year % 400 === 0) {
    console.log("Leap year")
} else if(year % 100 === 0) {
    console.log("Not a leap year")
} else if(year % 4 === 0) {
    console.log("Leap year")
} else {
    console.log("Not a leap year")
}