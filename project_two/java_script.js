let head = document.getElementById('head');

document.body.appendChild(head);
head.classList.add('head');

let logo = document.createElement('img');

logo.src = 'logo.jpg';
let src = document.getElementById('head');

src.appendChild(logo);
logo.classList.add('logo');

let tittle = document.createElement('h1');

tittle.textContent = 'Sviatkova Lavka';
let textContent = document.getElementById('head');

textContent.appendChild(tittle);
tittle.classList.add('tittle');

