/* ================================
   MINIMAL PORTFOLIO — script.js
   ================================ */

// ---- PAGE LOADER ----
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
const loaderText = document.getElementById('loaderText');

let progress = 0;
const loaderInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loaderInterval);
    loaderBar.style.setProperty('--progress', '100%');
    loaderText.textContent = '100%';
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 400);
  } else {
    loaderBar.style.setProperty('--progress', progress + '%');
    loaderText.textContent = Math.floor(progress) + '%';
  }
}, 80);

// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- REVEAL ON SCROLL ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, parseInt(entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.dataset.delay = (i % 5) * 80;
  revealObserver.observe(el);
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- CONTACT FORM ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    const original = btn.textContent;
    btn.textContent = 'Message Sent';
    btn.style.background = '#4a9970';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ---- ACTIVE NAV HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--text)';
    }
  });
});

// ---- WORK ITEM HOVER TILT ----
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const visual = item.querySelector('.work-visual');
    if (visual) {
      visual.style.transform = `perspective(800px) rotateY(${x * 4}deg) scale(0.97)`;
    }
  });
  item.addEventListener('mouseleave', () => {
    const visual = item.querySelector('.work-visual');
    if (visual) {
      visual.style.transform = '';
    }
  });
});

// ---- FOOTER YEAR ----
const yearEls = document.querySelectorAll('.footer-base span:first-child');
yearEls.forEach(el => {
  el.textContent = el.textContent.replace('2025', new Date().getFullYear());
});

// ---- SUBTLE PARALLAX ON HERO ----
const heroHeadline = document.querySelector('.hero-headline');
window.addEventListener('scroll', () => {
  if (heroHeadline && window.scrollY < window.innerHeight) {
    const y = window.scrollY * 0.15;
    heroHeadline.style.transform = `translateY(${y}px)`;
  }
});
