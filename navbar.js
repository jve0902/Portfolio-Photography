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

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", headerActive);

// let inner__cursor = document.querySelector(".inner__cursor");
let outer__cursor = document.querySelector(".outer__cursor");
let outer__cursor2 = document.querySelector(".outer__cursor2");

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