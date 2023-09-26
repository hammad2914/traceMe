// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let whyArrow = document.querySelector(".why-arrow");
whyArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let lawsArrow = document.querySelector(".laws-arrow");
lawsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let solutionArrow = document.querySelector(".solutions-arrow");
solutionArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let caseArrow = document.querySelector(".case-arrow");
caseArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show6");
}