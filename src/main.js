const d = document,
  w = window;
//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});



/* Permite el funcionamiento del carrusel Pollos  */
// const carrusel = document.querySelector("#carrusel-combos");

// /* Permite el funcionamiento del carrusel especialess */
// const carrusel3 = document.querySelector("#carrusel-combos3");
// const flechaIzq3 = document.querySelector("#flechaIzquierda3");
// const flechaDer3 = document.querySelector("#flechaDerecha3");
// flechaDer3.addEventListener("click", () => {
//   carrusel3.scrollLeft += carrusel3.offsetWidth;
// });
// flechaIzq3.addEventListener("click", () => {
//   carrusel3.scrollLeft -= carrusel3.offsetWidth;
// });
/*<<<<<<<<<<<<<------>>>>>>>>>>  */

/* Permite el funcionamiento del carrusel especialess */


// if (document.querySelector('#container-slider')) {
//   setInterval('fntExecuteSlide("next")', 5000);
// }


// /*****************Slider */
var windowWidth = w.innerWidth;

if (windowWidth <= 1024) {
  w.addEventListener("load", () => {
    let slide = 1;
    let $slides = d.querySelectorAll(".combos .contenedor-combo5"),
      total = $slides.length,
      $next = d.querySelector("#flechaDerecha3"),
      $prev = d.querySelector("#flechaIzquierda3");

    const setHeroHeight = () => {
      document.querySelector('#cabecera').style.height = window.innerHeight
    }
    window.addEventListener('resize', setHeroHeight)
    setHeroHeight()

    showSlide(1);
    $next.addEventListener("click", (e) => {
      e.preventDefault();
      slide++;
      // console.log($slides, total);
      if (slide > total) { slide = 1; }
      showSlide(slide);
    });

    $prev.addEventListener("click", (e) => {
      e.preventDefault();
      slide--;

      if (slide < 1) { slide = total; }
      showSlide(slide);
    });

    function showSlide(n) {
      n--; // decrement 1
      for (i = 0; i < total; i++) {
        (i == n) ? $slides[n].style.display = "block" : $slides[i].style.display = "none";
      }
    }
  });
}

if (windowWidth > 1024) {
  // const carrusel = document.querySelector("#carrusel-combos");
  w.addEventListener("load", () => {
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
  });
};