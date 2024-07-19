// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object



const book = {
    title: "The sword",
    author: "Martin j. Moses",
    year: 1990,
    updateYear: function(year) {
        this.year = year;
    }
}

book.updateYear(2000)

console.log(book.year)

