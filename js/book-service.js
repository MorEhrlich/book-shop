'use strict'
const KEY = 'books';
const PAGE_SIZE = 5;

var gBooks;
var gBooksId = 1;
var gPageIdx = 0;
var gSortBy = 'id';


_createBooks()

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) gPageIdx = 0;
}

function getBooksForDisplay() {
    var books = gBooks.sort(function (a, b) {
        if (gSortBy === 'id') {
            return a.id - b.id; 
        }
        if (gSortBy === 'name') {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0
        }
        if (gSortBy === 'price') {
            return a.price - b.price;
        }
    });
    var idxStart = gPageIdx * PAGE_SIZE;
    var books = gBooks.slice(idxStart, idxStart + PAGE_SIZE);
    return books;
}

function setSort(sortBy) {
    gSortBy = sortBy;
}


function addBook(name, price) {
    var book = _createBook(name, price)
    book.price = price;
    book.name = name;
    gBooks.unshift(book)
    _saveCarsToStorage();
}

function _createBook(name, price) {
    return {
        id: gBooksId++,
        name: name,
        price: price,
        imgURL: 'img/japan.jpg',
        des: makeLorem(),
        rate: 0
    }

}

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = [
            {
                id: gBooksId++,
                name: 'Harry-Potter',
                price: 30,
                imgURL: 'img/harry.jpg',
                des: makeLorem(),
                rate: 0
            },
            {
                id: gBooksId++,
                name: 'The Little Prince',
                price: 45,
                imgURL: 'img/prince.jpg',
                des: makeLorem(),
                rate: 0
            },
            {
                id: gBooksId++,
                name: 'Alice in Wonderland',
                price: 50,
                imgURL: 'img/alice.jpg',
                des: makeLorem(),
                rate: 0
            },
            {
                id: gBooksId++,
                name: 'Winnie the Pooh',
                price: 29,
                imgURL: 'img/pooh.jpg',
                des: makeLorem(),
                rate: 0
            }
        ]
    }
    gBooks = books;
    _saveBooksToStorage();
}


function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}


function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage;
}

function updateBook(bookId, newPrice) {
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    })
    book.price = newPrice;
    _saveBooksToStorage();
}

function updateBookRate(bookId, newRate) {
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    })
    book.rate = newRate;
    _saveBooksToStorage();
}


function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book;
}

function addBook(name, price) {
    var book = _createBook(name, price)
    book.price = price;
    book.name = name;
    gBooks.push(book)
    _saveBooksToStorage();
}

