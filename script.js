'use strict'

const hamb = document.querySelector("#hamb");
const popul = document.querySelector("#popul");
const menu = document.querySelector(".menu__list").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popul.classList.toggle("open");
    renderPopula();
}

function renderPopula(){
    popul.appendChild(menu);
}
