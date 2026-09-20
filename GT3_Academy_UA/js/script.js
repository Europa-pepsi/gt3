const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");
const tipButton = document.getElementById("tipButton");
const tip = document.getElementById("tip");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
});

tipButton.addEventListener("click", function () {
    tip.textContent = "Порада: гальмуй до повороту, а на виході з нього поступово додавай газ.";
});
