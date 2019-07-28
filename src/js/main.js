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

let counterValue = document.querySelector(".counter__value--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");
const buttonHistory = document.querySelector(".button-history--js");
const buttonClose = document.querySelector(".button-close--js");
const key = new Date().toISOString().slice(0, 10)
const history = document.querySelector(".history--js");
const historyList = document.querySelector(".history__list");
counterValue.innerHTML = 0;

// setting counterValue.innerHTML to your last entered value
// else create new record = 0
if (localStorage.getItem(key)) {
    counterValue.innerHTML = parseInt(localStorage.getItem(key));
} else {
    localStorage.setItem(key, 0);
    counterValue.innerHTML = 0;
}

buttonAdd.addEventListener('click', (e) => {
    // localStorage.getItem(key) is a string, it have to be parse to a number
    const currentValue = parseInt(localStorage.getItem(key));
    if (currentValue < 99) {
        localStorage.setItem(key, currentValue + 1);
        counterValue.innerHTML = parseInt(localStorage.getItem(key));

    } else {
        console.log('Nie możliwe!')
    }
})

buttonRemove.addEventListener('click', (e) => {
    const currentValue = parseInt(localStorage.getItem(key));
    if (currentValue > 0) {
        localStorage.setItem(key, currentValue - 1);
        counterValue.innerHTML = parseInt(localStorage.getItem(key));
    } else {
        console.log('Nie wypiłeś nawet jednej szklanki!');
    }
})


buttonHistory.addEventListener('click', (e) => {
    history.classList.toggle('history--visible');
    historyList.innerHTML = "";
    // push every localStorage.key to the array, and sort them
    const localStorageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let localStorageKey = localStorage.key(i);
        localStorageArray.push(localStorage.key(i));
        localStorageArray.sort();
    }
    // then print the array (each record in new list element)
    localStorageArray.forEach(key => {
        let value = localStorage.getItem(key);
        const li = document.createElement('li');
        li.id = key;
        historyList.appendChild(li);
        li.textContent = `W dniu ${key} wypiłeś ${value} szklanki`;
        console.log(`W dniu ${key} wypiłeś ${value} szklanki`);
    })

})

buttonClose.addEventListener('click', (e) => {
    history.classList.toggle('history--visible');
})