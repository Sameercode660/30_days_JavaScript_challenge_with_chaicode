// Use a for...in loop to iterate over the properties of the book object and log each property and its

const book = {
    title: "The sword",
    author: "Martin j. Moses",
    year: 1990
}

for(let key in book) {
    console.log(book[key])
}