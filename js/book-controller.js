'use strict'

function onInit() {
    renderBooks();
    doTrans();
}


function renderBooks() {
    var books = getBooksForDisplay()
    var strHtmls = books.map(function (book) {
        return `
        <tr>
       <td><p>${book.id}</p> </td>
       <td><p class="bookd-name">${book.name}</p></td>
       <td><p class="bookd-price">${book.price}$</p></td>
       <td><button data-trans="read-btn" class="read-btn" onclick="onReadBook(${book.id})">Read</button> </td>
       <td><button data-trans="update-btn" class="update-btn"onclick="onUpdateBook(${book.id})">Update</button></td>
       <td><button data-trans="delete-btn" class="delete-btn" onclick="onRemoveBook(${book.id})">Delete</button> </td>
       </tr>
        `
    })
    document.querySelector('.table-body').innerHTML = strHtmls.join('')
}


function onAddBook() {
    var bookName = prompt('what is the book name?')
    var bookPrice = +prompt('what is the book Price?')
    var name = bookName;
    var price = bookPrice;
    console.log('ADDING:', name, price);
    addBook(name, price)
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}


function onUpdateBook(bookId) {
    var newPrice = +prompt('Price?');
    updateBook(bookId, newPrice);
    renderBooks()
}


function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = book.name;
    elModal.querySelector('img').src = book.imgURL;
    elModal.querySelector('p').innerText = book.des;
    elModal.querySelector('.span').innerHTML = book.rate
    elModal.hidden = false;

}

function onCloseModal() {
    document.querySelector('.modal').hidden = true;
}

var gRate = 0;
var currentBookId;

function up() {
    if (gRate === 10) {
        return;
    } else {
        gRate++;
        document.querySelector('.up').value = gRate;
        var elSpan = document.querySelector('.span')
        elSpan.innerHTML = gRate;

    }
    updateBookRate(currentBookId, gRate);
}

function down() {
    if (gRate === 0) {
        return;
    } else {
        gRate--;
        document.querySelector('.down').value;
        var elSpan = document.querySelector('.span')
        elSpan.innerHTML = gRate
    }
    updateBookRate(currentBookId, gRate);
}


function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
    renderBooks();
    doTrans();
}

function onNextPage() {
    nextPage();
    renderBooks();
}


function onThClick(sortBy) {
    setSort(sortBy);
    renderBooks();
}
