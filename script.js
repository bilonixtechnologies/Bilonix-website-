const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


cards.forEach(card=>{

observer.observe(card);

});
const menu = document.querySelector(".menu-icon");

const nav = document.querySelector(".nav-links");


menu.onclick = () => {

nav.classList.toggle("active");

};
