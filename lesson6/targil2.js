print = console.log;
//q1

function object(name, date, genre, firstName, lastName, age) {
    const book = {
        name,
        date,
        genre,
        author: {
            firstName,
            lastName,

            age
        }
    };
    return book;
}

const book = (object('Harry Potter', '1990-03-01', 'fantasy', 'J K ', 'Rowling', 8));
const book2 = (object('white feng', '1970-05-20', 'prosa', 'Jeck', 'London', 44))
print(book)

//q2
function printObjects(object) {
    print(object.name)
    print(object.data)
    print(object.genre)

    print(object.author.firstName)
    print(object.author.lastName)
    print(object.author.age)
}
printObjects(book)

//q3
function reName(object, name) { object.name = name }

reName(book, "Harry potter 2")
print(book)
//q4

function reDate(object, date) { object.date = date }
reDate(book, "2000-05-13")
print(book)
//q5
function reGenre(object, genre) { object.genre = genre }
reDate(book, "CF")
print(book)
//q6
function reAuthor(object, author) {
    if (author.age < 15 || author.age > 80) throw Error("this invalid age")
    else book.author = author
}

const Jull = {
    firstName: 'Jull',
    lastName: 'Veron',
    age: 40
}

reAuthor(book, Jull)
print(book)

//q7
library = {}


//q8
function addBooks(book, library) {
    if (book.name in library) throw Error("the book is already exist")
    else library[book.name] = book
}


addBooks(book, library)

print(library)
//q9

    



function addAndPrint() {
    const book1 = object('Harry Potter', '1990-03-01', 'fantasy', 'J K ', 'Rowling', 8)
    const book2 = object('white feng', '1970-05-20', 'prosa', 'Jeck', 'London', 44)
    const book3 = object('indians', '1970-05-20', 'prosa', 'Jeck', 'London', 44)
    const book4 = object('moikans', '1970-05-20', 'prosa', 'Jeck', 'London', 44)
    addBooks(book1,library)
    addBooks(book2,library)
    addBooks(book3,library)
    addBooks(book4,library)
    print(Object.entries(library))

    

}
print(addAndPrint())







