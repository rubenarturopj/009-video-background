/*
    MDN
    The DOMContentLoaded event fires when the initial HTML document has been completely 
    loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

    The load event is fired when the whole page has loaded, including all dependent resources 
    such as stylesheets and images.
*/

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});
// las funciones pause() y play() ya existen en la biblioteca de js


// preloader
const preloader  = document.querySelector(".preloader");

// aquî ponermos el evento que la ventana va a escuchar, y es al cargarse completamente
// con diseño y todo LOAD
window.addEventListener("load", function() {
    // le vamos a agregar esta clase a nustro contenedor de la imagen preloader
    preloader.classList.add("hide-preloader");
});