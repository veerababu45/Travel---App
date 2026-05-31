// select elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
const form = document.querySelector(".contact-form")
const cards = document.querySelectorAll(".destination-card, .package-card, .testimonial-card");

// Toggle mobile menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// section 
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Contact form validation and submission
;

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in required fields.");
            return;
        }

        alert("Booking submitted successfully!");
        form.reset();
    });
}

// Reveal cards on scroll animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

// Package booking button click action
document.querySelectorAll(".package-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you! Our team will contact you soon.");
    });
});















































































































// // Select all navbar links
// const navLinks = document.querySelectorAll('.nav-links a');

// // Select all sections
// const sections = document.querySelectorAll('section');

// // Add smooth scroll on click
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent default jump
//         const targetId = link.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Highlight navbar link on scroll
// window.addEventListener('scroll', () => {
//     let current = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         if (pageYOffset >= sectionTop) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href').substring(1) === current) {
//             link.classList.add('active');
//         }
//     });
// });

// //  Simple alert for "Book Now" buttons
// const bookButtons = document.querySelectorAll('.package-card button');

// bookButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         alert('Thank you! Your booking request has been received.');
//     });
// });
