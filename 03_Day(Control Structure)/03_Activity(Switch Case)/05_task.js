// Question: Write a program that uses the switch case statement and determine the grade(A, B, C, D, E, F) on the score and log the grade to the console.

const marks = 92;

const grade = Math.floor(marks / 10)

switch(grade) {
    case 9: 
        console.log("GRADE: A");
        break;
    case 8:
        console.log("GRADE: B");
        break;
    case 7:
        console.log("GRADE: C");
        break;
    case 6: 
        console.log("GRADE: D");
        break;
    case 5:
        console.log("GRADE: E");
        break;
    case 4:
        console.log("GRADE: F");
        break;
    default: 
        console.log('Failed')
}