// Three.js setup
const container = document.querySelector('.home-background');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Load 3D model (replace 'models/your-model.gltf' with your actual model path)
const loader = new THREE.GLTFLoader();
let model;
loader.load(
    'models/your-model.gltf', // Example: a low-poly laptop or portfolio-related object
    (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1); // Adjust scale as needed
    },
    undefined,
    (error) => {
        console.error('Error loading model:', error);
    }
);

// OrbitControls for interactivity
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ScrollReveal animations
const sr = ScrollReveal({
    distance: '100px',
    duration: 2500,
    delay: 200,
    reset: true
});

sr.reveal('.home-content, h2.heading', { origin: 'top' });
sr.reveal('.home-img', { origin: 'bottom' });
sr.reveal('.home-content h1', { origin: 'left' });
sr.reveal('.home-content p', { origin: 'right' });
sr.reveal('.about-img', { origin: 'left' });
sr.reveal('.about-content', { origin: 'right' });
sr.reveal('.services-box', { origin: 'bottom', interval: 300 });
sr.reveal('.portfolio-box', { origin: 'bottom', interval: 300 });
sr.reveal('.contact form', { origin: 'bottom' });
sr.reveal('.footer', { origin: 'bottom' });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update the Typed.js configuration
var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Data Analyst", "Ms Office Expert", "Power BI Expert", "Python Developer", "SQL Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Add this at the beginning of your script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize 3D background
    const background = new Background3D();
    
    // ... rest of your existing code ...
});

// View More Dropdown Function
function toggleMoreCertificates() {
    const moreCerts = document.getElementById('moreCertificates');
    const btn = document.querySelector('.view-more-container .btn i');
    
    if (moreCerts.style.display === 'grid') {
        moreCerts.style.display = 'none';
        btn.className = 'fa-solid fa-chevron-down';
    } else {
        moreCerts.style.display = 'grid';
        btn.className = 'fa-solid fa-chevron-up';
    }
}

// Certificate Modal Functions
function openCertificate(imgSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImg.src = imgSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Update the dark mode toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Add this script to handle the back-to-top button visibility
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
