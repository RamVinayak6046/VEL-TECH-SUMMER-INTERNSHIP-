// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Typing effect

const typing = document.getElementById("typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Java Programmer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeText() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === word.length) {

            deleting = true;

            setTimeout(typeText, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeText, deleting ? 50 : 90);
}

typeText();


// Active navigation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});