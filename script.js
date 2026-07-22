document.addEventListener("DOMContentLoaded", function(){

const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-links");


menu.addEventListener("click", function(){

nav.classList.toggle("active");

});

});
