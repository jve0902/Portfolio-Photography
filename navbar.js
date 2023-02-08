'use strict';
/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}
/**
 * NAVBAR TOGGLER FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

document.onmousemove = function (e) {

    // inner__cursor.style.left = e.pageX - 5 + "px";
    // inner__cursor.style.top = e.pageY - 5 + "px";
    // inner__cursor.style.display = "block";

    outer__cursor2.style.left = e.pageX - 12 + "px";
    outer__cursor2.style.top = e.pageY - 12 + "px";
    outer__cursor2.style.display = "block";

    outer__cursor.style.left = e.pageX - 22 + "px";
    outer__cursor.style.top = e.pageY - 22 + "px";
    outer__cursor.style.display = "block";

}

// hero image slide show
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides")[0].children;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 3 seconds
}
// reveal on scroll
// var revealElements = document.querySelectorAll('.reveal');
// var revealVisible = 'reveal-visible';
// var revealThreshold = 0.1;

// function revealCheck() {
//     revealElements.forEach(function (element) {
//         var rect = element.getBoundingClientRect();
//         if (rect.top <= window.innerHeight * revealThreshold && rect.bottom >= 0) {
//             element.classList.add(revealVisible);
//         } else {
//             element.classList.remove(revealVisible);
//         }
//     });
// }

// window.addEventListener('scroll', revealCheck);
// revealCheck();

// 


