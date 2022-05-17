const popup = document.querySelector('#popup');
const burger = document.querySelector('.burger-field');
const menu = document.querySelector('.menu').cloneNode(1);


burger.addEventListener('click', hambHandler)


function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open")
    renderPopup()
}


function renderPopup() {
    popup.appendChild(menu)
}

// ФОРМА ПОЛУЧЕНИЯ КОНСУЛЬТАЦИИ

let button = document.querySelector('.send')

button.onclick = function (event) {
    event.preventDefault()
    send()
}

function send () {

}