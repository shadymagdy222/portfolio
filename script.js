// ========================= script.js =========================

// LOADER

window.addEventListener("load",()=>{

  setTimeout(()=>{

    const loader =
    document.querySelector(".loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

  },1200);

});

// CURSOR

const dot =
document.querySelector(".cursor-dot");

const outline =
document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove",(e)=>{

  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";

});

function animateCursor(){

  outlineX += (mouseX - outlineX) * 0.12;
  outlineY += (mouseY - outlineY) * 0.12;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animateCursor);

}

animateCursor();

// CURSOR HOVER

const hoverItems =
document.querySelectorAll(
  "a, .portfolio-card, .skill"
);

hoverItems.forEach((item)=>{

  item.addEventListener("mouseenter",()=>{

    outline.style.width = "80px";
    outline.style.height = "80px";
    outline.style.border =
    "1px solid #2563ff";

  });

  item.addEventListener("mouseleave",()=>{

    outline.style.width = "40px";
    outline.style.height = "40px";
    outline.style.border =
    "1px solid rgba(255,255,255,.5)";

  });

});

// REVEAL

const reveals =
document.querySelectorAll(".reveal");

function reveal(){

  reveals.forEach((el)=>{

    const top =
    el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll",reveal);

reveal();

// PARALLAX

document.addEventListener("mousemove",(e)=>{

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelectorAll(".blur")
  .forEach((blur)=>{

    blur.style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  });

});

// TYPING EFFECT

const words = [

  "Creative Video Editor",
  "Motion Graphics Designer",
  "Cinematic Storyteller",
  "Social Media Specialist"

];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.querySelector(".typing");

function typeEffect(){

  if(charIndex < words[wordIndex].length){

    typing.textContent +=
    words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,70);

  }else{

    setTimeout(eraseEffect,1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typing.textContent =
    words[wordIndex]
    .substring(0,charIndex-1);

    charIndex--;

    setTimeout(eraseEffect,40);

  }else{

    wordIndex++;

    if(wordIndex >= words.length){

      wordIndex = 0;

    }

    setTimeout(typeEffect,200);

  }

}

typeEffect();

// MAGNETIC BUTTONS

const magnets =
document.querySelectorAll(".magnetic");

magnets.forEach((btn)=>{

  btn.addEventListener("mousemove",(e)=>{

    const rect =
    btn.getBoundingClientRect();

    const x =
    e.clientX - rect.left - rect.width / 2;

    const y =
    e.clientY - rect.top - rect.height / 2;

    btn.style.transform =
    `translate(${x * .18}px, ${y * .18}px)`;

  });

  btn.addEventListener("mouseleave",()=>{

    btn.style.transform =
    "translate(0px,0px)";

  });

});

// OPEN PROJECT

function openProject(link){

  window.open(link,"_blank");

}

// 3D CARDS

const cards =
document.querySelectorAll(".portfolio-card");

cards.forEach((card)=>{

  card.addEventListener("mousemove",(e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width) - 0.5) * 10;

    const rotateX =
    ((y / rect.height) - 0.5) * -10;

    card.style.transform =
    `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
    `;

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
    `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
    `;

  });

});
const audio = document.getElementById("introSound");

document.addEventListener("click", () => {

  audio.play();

}, { once: true });
// أي أكواد عندك

const menuBtn = document.querySelector(".menu-btn");

// أكواد تانية...

// ===== Scroll to top on refresh =====
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

