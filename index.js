//Simple library to keep record of your books. 
let myLibrary = [];
let newBook="";

let formDiv = document.getElementById("formDiv");
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pagesn");
let newStatus = document.getElementById("status");
let addButton = document.getElementById("addNew");
let formSubmit = document.getElementById("formSubmit");
let booksDiv = document.getElementById("booksDiv");

function Book(title, author, pages, read){
    this.title = `Title: ${title}`;
    this.author = `Author: ${author}`;
    this.pages = `Pages: ${pages}`;
    this.read =  `Read: ${read}`;
/*    this.info = function (){
        return  `${this.title}  ` +  `${this.author}  ` +  `${this.pages}  ` +  `${this.read} `;
    }*/
}

function addBookToLibrary (){
    formDiv.style.display = "inline-block";
} 

function createBook(){
    newBook = document.createElement("div");
    newBook.style.width = "280px";
    newBook.style.height = "370px";
    newBook.style.backgroundImage = "url('Images/bookcover.png')";
    booksDiv.appendChild(newBook);   
    writeBookCover(); 
    eraseForm();

}

function writeBookCover(){
    let newCover = new Book(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    let newInfo = document.createElement("div");
    newInfo.classList.add("bookCover");
    let text = "";
    for (let x in newCover){
        text += newCover[x] + "<br>";
    }
    newInfo.innerHTML = text;
    newBook.appendChild(newInfo);
}

function eraseForm(){
    const formFields = document.querySelectorAll(".formInput");
    for(let i = 0; i<formFields.length; i++){
        formFields[i].value = "";
        //FIX: This is not working
        if(formFields[i].nodeType == "checkbox"){
            formFields[i].ariaChecked  == false;
        }
    }
}


addButton.addEventListener("click", addBookToLibrary);
formSubmit.addEventListener("click", createBook);

//const book1 = new Book("The Paris Vendetta", "Steve Berry", "450", "read");