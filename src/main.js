const d = document,
  w = window;
var windowWidth = w.innerWidth;
//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  navToggle.classList.toggle("is-active");
});



// /*****************$carouselContainer */
if (windowWidth <= 1023) {
  w.addEventListener("load", () => {
    let slide = 1;
    let $slides = d.querySelectorAll(".contenedor-combo5"),
      total = $slides.length,
      $next = d.querySelector("#flechaDerecha3"),
      $prev = d.querySelector("#flechaIzquierda3");
    /****************************************Delete White Space Movil Devices*/
    // select the node containing the UI navigation elements for callback function closure

    /********************************************************************** */

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

d.addEventListener("DOMContentLoaded", function () {
  function reorient(e) {
    var portrait = (window.orientation % 180 == 0);
    $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
  }
  window.onorientationchange = reorient;
  window.setTimeout(reorient, 0);
});


