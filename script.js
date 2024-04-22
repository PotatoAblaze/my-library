const myLibrary = [];

const addBookDialog = document.querySelector("#add-book-dialog");
const addBookButton = document.querySelector("#add-book-button");
const bookFormSubmissionButton = document.querySelector("#form-submit-button");
const bookFormCloseButton = document.querySelector("#form-close-button");

const nameInput = document.querySelector("#book-name");
const authorInput = document.querySelector("#book-author");
const pagesInput = document.querySelector("#book-pages");
const isReadInput = document.querySelector("#book-has-read");

const tilesContainer = document.querySelector(".display-pane");
const referenceTile = document.querySelector("#reference-tile");

function book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        console.log(title);
        console.log(author);
        console.log(pages);
        console.log(isRead);
    }
}

function addBookToLibrary(title, author, pages, isRead)
{
    const newBook = new book(title, author, pages, isRead);
    myLibrary.push(newBook);

    const newTile = referenceTile.cloneNode(true);
    newTile.querySelector(".book-title span").textContent = title.toUpperCase();
    newTile.querySelector("#author-name-text").textContent = "Author: " + author;
    newTile.querySelector("#book-pages-text").textContent = "Pages: " + pages;
    newTile.querySelector("#has-read-text").textContent = "Read: " + (isRead ? "yes" : "No");

    const readButton = newTile.querySelector("#mark-read-button");
    const deleteButton = newTile.querySelector("#mark-delete-button");

    readButton.addEventListener("click", (event) => {
        const textField = event.target.parentNode.parentNode.parentNode.querySelector("#has-read-text");
        textField.textContent = "Read: " + (textField.textContent.endsWith("No") ? "Yes" : "No");
    })

    deleteButton.addEventListener("click", (event) => {
        const tile = event.target.parentNode.parentNode.parentNode;
        tile.remove();
    })

    tilesContainer.appendChild(newTile);
}


addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

bookFormCloseButton.addEventListener("click", () => {
    addBookDialog.close();
});

bookFormSubmissionButton.addEventListener("click", () => {
    let bookName = nameInput.value;
    if(nameInput.value === "")  bookName = "LMAO U STUPID";

    addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
    addBookDialog.close();
});

addBookToLibrary("Stormlight Archive", "Brandon Sanderson", 255, false);
addBookToLibrary("Malazan", "Steven Erikson", 905, true);
addBookToLibrary("American Gods", "Neil Gaiman", 652, true);
addBookToLibrary("The Way Of The Wind", "Patrick Rothfuss", 670, false);