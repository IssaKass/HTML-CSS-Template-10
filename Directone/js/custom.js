let menuToggler = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav");

menuToggler.onclick = function () {
	this.classList.toggle("clicked-menu");
	nav.classList.toggle("open-nav");
};