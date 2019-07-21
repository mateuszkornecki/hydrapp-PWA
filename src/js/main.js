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
const key = new Date().toISOString().slice(0, 10)
let value = 0;
counterNumber.innerHTML = value;

buttonAdd.addEventListener('click', (e) => {
    if (value < 99) {
        counterNumber.innerHTML++;
        value++;
        localStorage.setItem(key, value);
    } else {
        console.log('Nie możliwe!')
    }
})

buttonRemove.addEventListener('click', (e) => {
    if (value > 0) {
        counterNumber.innerHTML--;
        value--;
        localStorage.setItem(key, value);
    } else {
        console.log('Nie wypiłeś nawet jednej szklanki!');
    }
})