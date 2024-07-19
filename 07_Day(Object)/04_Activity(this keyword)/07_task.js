// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.



const book = {
    title: "The sword",
    author: "Martin j. Moses",
    year: 1990,
    method: function() {
        return this.title + " " + this.author
    }
}

console.log(book.method())