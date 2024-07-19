// use the reduce method to sum all the element of an array


const array = [1,2,3,4,5];

const sum = array.reduce((value, accum) => accum += value, 0)

console.log(sum)