// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method


const book = {
    title: "The sword",
    author: "Martin j. Moses",
    year: 1990,
    method: function() {
        return this.title + " " + this.author
    }
}

console.log(book.method())

