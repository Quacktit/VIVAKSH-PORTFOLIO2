/* ============================
   BOLD PORTFOLIO — script.js
   ============================ */

// ---- DEVICE DETECTION ----
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

if (!isTouchDevice) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '0.7';
  });
}

// ---- MOBILE HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});

// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- BACK TO TOP BUTTON ----
const backTopBtn = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTopBtn.classList.add('show');
  } else {
    backTopBtn.classList.remove('show');
  }
});

if (backTopBtn) {
  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- REVEAL ON SCROLL ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 100;
  revealObserver.observe(el);
});

// ---- SKILL BARS ----
const barFills = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.dataset.w;
      setTimeout(() => {
        fill.style.width = width + '%';
      }, 200);
      barObserver.unobserve(fill);
    }
  });
}, { threshold: 0.5 });

barFills.forEach(bar => barObserver.observe(bar));

// ---- PROJECT CARD COLOR ----
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  const color = card.dataset.color;
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = color + '55';
    card.style.boxShadow = `0 24px 48px ${color}22`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '';
    card.style.boxShadow = '';
  });
});

// ---- HERO TITLE STAGGER ----
const heroLines = document.querySelectorAll('.hero-title .line');
heroLines.forEach((line, i) => {
  line.style.animationDelay = `${i * 0.15}s`;
  line.style.opacity = '0';
  line.style.transform = 'translateY(60px)';
  line.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
  setTimeout(() => {
    line.style.opacity = '1';
    line.style.transform = 'translateY(0)';
  }, 300 + i * 150);
});

// ---- CONTACT FORM (Fixed Mailto Bug) ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.textContent = 'Opening Mail Client... ✓';
    btn.style.background = '#059669';

    // Fetch values safely
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value || 'Inquiry';
    const body = document.getElementById('contactBody').value;

    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${body}`;
    const mailtoLink = `mailto:vivaksh.business@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      btn.textContent = originalText;
      btn.style.background = '';
      form.reset();
    }, 1500);
  });
}

// ---- SMOOTH NAV LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- PARALLAX HERO BG TEXT ----
const bgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  if (bgText) {
    const y = window.scrollY * 0.3;
    bgText.style.transform = `translate(-50%, calc(-50% + ${y}px))`;
  }
});

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id]');
const scrollNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  scrollNavLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--text)';
    }
  });
});
