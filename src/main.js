//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});



/* Permite el funcionamiento del carrusel Pollos  */
const carrusel = document.querySelector("#carrusel-combos");

/* Permite el funcionamiento del carrusel especialess */
const carrusel3 = document.querySelector("#carrusel-combos3");
const flechaIzq3 = document.querySelector("#flechaIzquierda3");
const flechaDer3 = document.querySelector("#flechaDerecha3");
flechaDer3.addEventListener("click", () => {
  carrusel3.scrollLeft += carrusel3.offsetWidth;
});
flechaIzq3.addEventListener("click", () => {
  carrusel3.scrollLeft -= carrusel3.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */

/* Permite el funcionamiento del carrusel especialess */


if (document.querySelector('#container-slider')) {
  setInterval('fntExecuteSlide("next")', 5000);
}

