// ===== Scroll to top on refresh =====
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===== LOADER =====
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.style.overflowY = "auto";

    }, 1800);

});

// ===== INTRO AUDIO =====
const audio = document.getElementById("introSound");
document.addEventListener("click", () => {
    if(audio && audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked by browser"));
    }
}, { once: true });

// ===== MOBILE MENU =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    let icon = menuToggle.querySelector("i");
    if(navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking a link
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
    });
});

// ===== CUSTOM CURSOR =====
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

if(window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
    });

    function animateCursor() {
        let distX = mouseX - outlineX;
        let distY = mouseY - outlineY;
        outlineX += distX * 0.15;
        outlineY += distY * 0.15;
        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor Hover Effects
    const hoverItems = document.querySelectorAll("a, .tilt-card, .main-btn, .glass-btn");
    hoverItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            outline.style.width = "60px";
            outline.style.height = "60px";
            outline.style.borderColor = "#2563ff";
            outline.style.backgroundColor = "rgba(37, 99, 255, 0.1)";
        });
        item.addEventListener("mouseleave", () => {
            outline.style.width = "40px";
            outline.style.height = "40px";
            outline.style.borderColor = "rgba(255,255,255,.1)";
            outline.style.backgroundColor = "transparent";
        });
    });
}

// ===== 3D TILT EFFECT (ADVANCED) =====
const tiltCards = document.querySelectorAll(".tilt-card, .box-3d");

tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// ===== MAGNETIC BUTTONS =====
const magnets = document.querySelectorAll(".magnetic");
magnets.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px,0px)";
    });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");
function reveal() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// ===== TYPING EFFECT =====
const words = [
    "مونتير فيديو محترف",
    "مصمم موشن جرافيك",
    "صانع محتوى إبداعي",
    "متخصص في إعلانات السوشيال ميديا"
];
let wordIndex = 0;
let charIndex = 0;
const typing = document.querySelector(".typing");

if (typing) {
    typeEffect();
}

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typing.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 70);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typing.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 200);
    }
}
typeEffect();

// ===== OPEN PROJECT FUNCTION =====
function openProject(link) {
    window.open(link, "_blank");
}

// ===== PARTICLES BACKGROUND GENERATOR =====
function createParticles() {
    const container = document.getElementById('particles-js');
    const particleCount = 50; // عدد الجزيئات المتطايرة

    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize size, position, and animation duration
        let size = Math.random() * 4 + 1; // 1px to 5px
        let posX = Math.random() * 100; // 0% to 100% viewport width
        let posY = Math.random() * 100; // start anywhere initially
        let duration = Math.random() * 10 + 5; // 5s to 15s
        let delay = Math.random() * 5;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = posX + 'vw';
        particle.style.top = posY + 'vh';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        container.appendChild(particle);
    }
}
createParticles();


// ===== ABOUT COUNTERS =====

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, { threshold: .5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== SKILLS =====

const skillItems = document.querySelectorAll(".skill-item");

const skillsObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const bar = entry.target.querySelector(".progress-fill");

const number = entry.target.querySelector(".skill-number");

const target = +number.dataset.target;

bar.style.width = target + "%";

let current = 0;

const timer = setInterval(()=>{

current++;

number.textContent = current + "%";

if(current>=target){

clearInterval(timer);

}

},18);

skillsObserver.unobserve(entry.target);

});

},{threshold:.4});

skillItems.forEach(item=>skillsObserver.observe(item));

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
