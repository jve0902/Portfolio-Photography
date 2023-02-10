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


// hero image slide show

var i = 1; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch

// Image List
images[1] = "/assets/projects/SQUARE/2.jpg";
images[2] = "/assets/projects/SQUARE/3.jpg";
images[3] = "/assets/projects/SQUARE/4.jpg";
images[4] = "/assets/projects/SQUARE/5.jpg";
images[5] = "/assets/projects/SQUARE/6.jpg";
images[6] = "/assets/projects/SQUARE/7.jpg";
images[7] = "/assets/projects/SQUARE/8.jpg";
images[8] = "/assets/projects/SQUARE/9.jpg";
images[9] = "/assets/projects/SQUARE/10.jpg";
images[10] = "/assets/projects/SQUARE/11.jpg";
images[11] = "/assets/projects/SQUARE/12.jpg";
images[12] = "/assets/projects/SQUARE/13.jpg";


// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;




// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slides")[0].children;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 1000); // Change image every 3 seconds
// }

// cursor animation 

let cursor = document.createElement("div");
document.querySelector("body").prepend(cursor), (cursor.className = "cursor");
var cursorAnim = {
    delay: 5,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    $cursor: document.querySelector(".cursor"),
    init: function () {
        (this.dotSize = this.$cursor.offsetWidth),
            this.setupEventListeners(),
            this.animateDotOutline();
    },
    setupEventListeners: function () {
        var e = this;
        document
            .querySelectorAll("a:not(.blog-card), .hover_card")
            .forEach(function (t) {
                t.addEventListener("mouseover", function () {
                    t.classList.contains("hover_card")
                        ? (e.toggleCursorSize(!0, 1),
                            e.$cursor.classList.add("blur"),
                            (e.$cursor.textContent = t.classList.contains("contact-title")
                                ? "Book a call"
                                : "Explore"))
                        : e.toggleCursorSize(!0);
                }),
                    t.addEventListener("mouseout", function () {
                        e.toggleCursorSize(!1),
                            e.$cursor.classList.remove("blur"),
                            (e.$cursor.textContent = "");
                    });
            }),
            document.addEventListener("mousemove", function (t) {
                (e.endX = t.clientX), (e.endY = t.clientY);
            }),
            document.addEventListener("mouseenter", function (t) {
                e.$cursor.style.opacity = 1;
            }),
            document.addEventListener("mouseleave", function (t) {
                e.$cursor.style.opacity = 0;
            });
    },
    animateDotOutline: function () {
        var e = this;
        (e._x += (e.endX - e._x) / e.delay),
            (e._y += (e.endY - e._y) / e.delay),
            (e.$cursor.style.translate = `${e._x}px ${e._y}px`),
            requestAnimationFrame(this.animateDotOutline.bind(e));
    },
    toggleCursorSize: function (e, t) {
        this.$cursor.style.transform = e
            ? `translate(-50%, -50%) scale(${t || 0.25})`
            : "translate(-50%, -50%) scale(0.1)";
    }
};



