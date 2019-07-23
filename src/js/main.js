"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below

const counterNumber = document.querySelector(".counter__value--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");
const buttonHistory = document.querySelector(".button-history--js");
const buttonClose = document.querySelector(".button-close--js");
const key = new Date().toISOString().slice(0, 10)
const history = document.querySelector(".history--js");
const historyList = document.querySelector(".history__list");
let counterValue = 0;
counterNumber.innerHTML = counterValue;


//Jeśli pod kluczem niczego nie ma - przypisz 0
if (localStorage.length === 0) {
    localStorage.setItem(key, 0);
}

buttonAdd.addEventListener('click', (e) => {
    if (counterValue < 99) {
        counterNumber.innerHTML++;
        counterValue++;
        localStorage.setItem(key, counterValue);
    } else {
        console.log('Nie możliwe!')
    }
})

buttonRemove.addEventListener('click', (e) => {
    if (counterValue > 0) {
        counterNumber.innerHTML--;
        counterValue--;
        localStorage.setItem(key, counterValue);
    } else {
        console.log('Nie wypiłeś nawet jednej szklanki!');
    }
})


buttonHistory.addEventListener('click', (e) => {
    history.classList.toggle('history--visible');
    historyList.innerHTML = "";
    // wypisuje historię tworząc nowe elementy listy
    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        let localStorageKey = localStorage.key(i);
        let localStorageValue = localStorage.getItem(localStorage.key(i));
        localStorage.getItem(localStorageKey);
        li.id = i;
        historyList.appendChild(li);
        li.textContent = `W dniu ${localStorageKey} wypiłeś ${localStorageValue} szklanki`;
    }

})

buttonClose.addEventListener('click', (e) => {
    history.classList.toggle('history--visible');
})