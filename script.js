const myLibrary = [];
var divCounter = 0;
const bookGrid = document.getElementById('book-grid');
const formDiv = document.getElementById('bookInfoForm');
const blurBackground = document.getElementById('blur-background');
var newBook; //new book object
var createdDiv; //new book card

function Book( title, author, pagesRead, totalPages, haveRead) {

    this.title = title;
    this.author = author;
    this.pagesRead = pagesRead;
    this.totalPages = totalPages;
    this.haveRead = haveRead;
    if (!this.haveRead) {

        if (totalPages === pagesRead) {
        this.haveRead = true;
        }
        else{
            this.haveRead = false;
        }
    }
    

}

function addBookToLibrary() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var totalPages = document.getElementById('totalPages').value;
    var pagesRead = document.getElementById('pagesRead').value;
    var haveRead = document.getElementById('haveRead').checked;

    //Create the book object by calling Book constructor
    newBook = new Book (title, author, pagesRead, totalPages, haveRead);
    myLibrary.push(newBook);
    addDiv();
}

function addDiv (){
    createdDiv = createDivProto();
    populateDiv();
    toggleLibraryCard();
}

function createDivProto(){
    ++divCounter;
    var newDiv = document.createElement('div');
    newDiv.id = `${divCounter}`;
    newDiv.className = 'new_Div';
    if (newBook.haveRead) {
        newDiv.style.border = '2px solid green'
    }
    else{
        newDiv.style.border = '2px solid red'
    }
    bookGrid.appendChild(newDiv);
    return newDiv;
}

function populateDiv () {
    bTitle = document.createElement('h2');
    bAuthor = document.createElement('h5');
    bTitle.textContent = newBook.title;
    bAuthor.textContent = newBook.author;
    createdDiv.appendChild(bTitle);
    createdDiv.appendChild(bAuthor);
}

function toggleLibraryCard() {

    if ((window.getComputedStyle(blurBackground)).display === 'none') {
        formDiv.style.display = 'grid'; 
        blurBackground.style.display = 'block'; 
    } else {
        formDiv.style.display = 'none';
        blurBackground.style.display = 'none';
    }
}
