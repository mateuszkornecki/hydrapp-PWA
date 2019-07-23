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

const counterNumber = document.querySelector(".counter__number--js");
const buttonAdd = document.querySelector(".button__add--js");
const buttonRemove = document.querySelector(".button__remove--js");
const buttonHistory = document.querySelector(".button__history--js");
const buttonClose = document.querySelector(".button__close--js");
const key = new Date().toISOString().slice(0, 10)
const history = document.querySelector(".history");
const toggleHistory = document.querySelector(".wrapper--js");
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
    toggleHistory.classList.toggle('wrapper--visible');
    history.innerHTML = "";
    // wypisuje historię tworząc nowe elementy listy
    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        localStorage.getItem(localStorage.key(i));
        let localStorageKey = localStorage.key(i);
        let localStorageValue = localStorage.getItem(localStorage.key(i));
        li.id = i;
        history.appendChild(li);
        li.textContent = `W dniu ${localStorageKey} wypiłeś ${localStorageValue} szklanki`;
    }

})

buttonClose.addEventListener('click', (e) => {
    toggleHistory.classList.toggle('wrapper--visible');
})