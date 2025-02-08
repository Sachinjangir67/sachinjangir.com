// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Remove toggle icon and navbar when scrolling
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

// ScrollReveal initialization
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
} else {
    console.warn("ScrollReveal library is missing!");
}

// Typed.js animation
if (typeof Typed !== 'undefined') {
    let typed = new Typed('.auto-type', {
        strings: ["Data Analyst", "Ms Office Expert", "Tally Accountant", "Frontend Developer"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
} else {
    console.warn("Typed.js library is missing!");
}
