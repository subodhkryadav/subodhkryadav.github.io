// Smooth scroll for anchor links (if used in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Reveal animations for sections on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top + scrollY;
    if (scrollY + windowHeight - 100 > sectionTop) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.8s ease';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial reveal
window.addEventListener('load', () => {
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
  });
  revealOnScroll();
});
