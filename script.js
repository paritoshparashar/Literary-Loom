const myLibrary = [];
var divCounter = 0;
const bookGrid = document.getElementById('book-grid');
var newBook;

function Book( title, author, totalPages, haveRead) {

    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.haveRead = haveRead;
    this.info = function (){

        var readMsg;

        if (haveRead) {
            readMsg = 'read'
        }
        else{
            readMsg = 'not read yet'
        }

        return (`${this.title} by ${this.author}, ${this.totalPages} pages, ${readMsg}`);
    }

}

function addBookToLibrary() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var totalPages = document.getElementById('totalPages').value;
    var haveRead = document.getElementById('haveRead').checked;

    //Create the book object by calling Book constructor
    newBook = new Book (title, author, totalPages, haveRead);

    addDiv();
}

function createDivProto(){

    ++divCounter;
    var newDiv = document.createElement('div');
    newDiv.id = `${divCounter}`;
    newDiv.style.height = '200px';
    newDiv.style.border = '2px solid black';
    bookGrid.appendChild(newDiv)
    return newDiv;

}

function addDiv (){

    var createdDiv = createDivProto();
    createdDiv.textContent = `${newBook.info()}`;
}

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
// }