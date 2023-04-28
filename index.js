//Simple library to keep record of your books. 
let myLibrary = [];
let newBook="";
let newDeleteB= "";

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
    //This saves the entire DOM object, not only the object. FIX
    myLibrary.push(newBook);
    newBook.setAttribute("data-number", myLibrary.length);
    console.log(newBook.dataset.number);
    console.log(myLibrary[0]);
    eraseForm();

}

function writeBookCover(){
    let newCover = new Book(newTitle.value, newAuthor.value, newPages.value, newStatus.checked);
    let newInfo = document.createElement("div");
    newDeleteB = document.createElement("button");
    newDeleteB.textContent = "Delete";
    newInfo.classList.add("bookCover");

    let text = "";
    for (let x in newCover){
        text += newCover[x] + "<br>";
    }
    newInfo.innerHTML = text;
    newBook.appendChild(newInfo);
    newInfo.appendChild(newDeleteB);

}

function eraseForm(){
    const formFields = document.querySelectorAll(".formInput");
    for(let i = 0; i<formFields.length; i++){
        formFields[i].value = "";
        if(formFields[i].type == "checkbox"){
            formFields[i].checked = false;
        }
    }
}

function eraseBook(bookNumber){
    //To erase the book from the array. FIX: This doesn't work. 
    for(let i=0; i<myLibrary.length;i++){
        if(myLibrary[i]===bookNumber){
            myLibrary.splice(i, 1);
        }
    }
    //To erase the book from the DOM
    booksDiv.removeChild(newBook);


}


addButton.addEventListener("click", addBookToLibrary);
formSubmit.addEventListener("click", createBook);
newDeleteB.addEventListener("click", eraseBook(newBook.dataset.number));


//const book1 = new Book("The Paris Vendetta", "Steve Berry", "450", "read");