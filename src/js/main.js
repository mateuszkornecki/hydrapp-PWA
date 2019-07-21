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
const history = document.querySelector(".history");


let counterValue = 0;
counterNumber.innerHTML = counterValue;

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

//! TESTY TRWAJĄ
//? ---------
// localStorage.setItem('test', 'wartość');
// localStorage.setItem('test1', 'wartość2');
// localStorage.setItem('test3', 'wartość3');
const lama = Object.entries(localStorage);
console.log(lama);
console.log(lama.length);

// lama.forEach((element) => {
//     history.appendChild(li);
//     li.innerHTML = element;
//     console.log(element);
// });

for (let i = 0; i < lama.length; i++) {
    const li = document.createElement('li');
    li.id = i;
    history.appendChild(li);
    li.textContent = lama[i];
}