"use strict"

let clickBtn = document.getElementById('img-click');
let imageRotate = document.getElementById('img-rotate');


clickBtn.addEventListener('click', () => {
    imageRotate.classList.toggle('rotate');
});
