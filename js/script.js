// Modules
import smoothScroll from "./modules/scroll.js";
import progress from "./modules/progress.js";

// Smooth Scrolling
smoothScroll();

// Progress bars
const progressInterval = setInterval(() => progress(), 500); 

setTimeout(() => {
    clearInterval(progressInterval)
}, 600000);

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: false,
})

sr.reveal('.introducao', { delay: 300 });
sr.reveal('.experiencia', { delay: 300 });
sr.reveal('.formacao', { delay: 300 });
sr.reveal('.tecnologias', { delay: 300 });
sr.reveal('.projetos', { delay: 300 });
sr.reveal('.footer', { delay: 300 });