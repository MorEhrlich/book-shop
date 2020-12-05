'use strict'

var gTrans = {
    'title': {
        en: 'Welcome to my BookShop!',
        es: '¡Bienvenido a mi librería!',
        he: 'ברוכים הבאים לחנות הספרים שלי!'
    },
    'create-btn': {
        en: 'Create new book',
        es: 'Crear nuevo libro',
        he: 'צור ספר חדש',
    },
    'book-rate': {
        en: 'Book Rate:',
        es: 'Tarifa del libro:',
        he: 'דירוג ספר',
    },
    'close-btn': {
        en: 'Close',
        es: 'Cerrar',
        he: 'סגור'
    },
    'book-id': {
        en: 'Id',
        es: 'Carné de identidad',
        he: 'מזהה',
    },
    'book-name': {
        en: 'Name',
        es: 'Nombre',
        he: 'שם',
    },
    'book-price': {
        en: 'Price',
        es: 'Precio',
        he: 'מחיר',
    },
    'actions': {
        en: 'Actions',
        es: 'Comportamiento',
        he: 'פעולות',
    },
    'read-btn': {
        en: 'Read',
        es: 'Leer',
        he: 'קרא',
    },
    'update-btn': {
        en: 'Update',
        es: 'Actualizar',
        he: 'עדכן'
    },
    'delete-btn': {
        en: 'Delete',
        es: 'Eliminar',
        he: 'מחק'
    },
    'next-btn': {
        en: 'Next Page',
        es: 'Siguiente página',
        he: 'דף הבא'
    }

}


var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(function (el) {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.placeholder = txt
        } else {
            el.innerText = txt
        }
    })
}

function setLang(lang) {
    gCurrLang = lang;
}