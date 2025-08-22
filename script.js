// Función principal

function createBook(title, author, genre, isbn){
    return { // Retorna lo que es 
        id: Date.now(),
        title,
        author,
        genre,
        isbn,
        isVailable: true,
        borrowedBy: null,
        borrowedAt: null,
        dueDate: null,
        createdAt: new Date()
    };
}



// Función agregar libro a la biblioteca:

function addBookToLibrary(books, title, author, genre, isbn){
    const newBook = createBook(title, author, genre, isbn);
    books.push(newBook);
    return newBook;
}


const biblioteca = []

const libro3 = addBookToLibrary(biblioteca, "dijeev", "Mariana", "Suspenso", "456" )
const libro4 = addBookToLibrary(biblioteca, "dadfve", "Mariana", "Suspenso", "452" )
const libro5 = addBookToLibrary(biblioteca, "jokjko", "Mariana", "Suspenso", "764" )

console.log("Biblioteca: ", biblioteca)