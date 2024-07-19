// Access and log the name of the library and the titles of all the books in the library


const library = {
    name: "Osho library",
    books: [
      {
        title: "The sword",
        author: "Martin j. Moses",
        year: 1990,
      },
      {
        title: "Intelligence",
        author: "Osho",
        year: 2002,
      },
      {
        title: "Courage",
        author: "Osho",
        year: 2005,
      },
    ],
  };

  console.log(library.name)
  library.books.forEach((book) => {
    console.log(book.title)
  })