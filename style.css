/* --- ADD TO THE TOP OF YOUR CSS --- */
.desktop-only { display: flex; }
.mobile-only { display: none; }

/* Hide Custom Cursor on Touch Devices */
@media (hover: none) and (pointer: coarse) {
  .cursor, .cursor-follower { display: none !important; }
  body { cursor: auto !important; }
}

/* --- MOBILE NAVIGATION LOGIC --- */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
}

.nav-toggle span {
  width: 30px;
  height: 2px;
  background: var(--accent);
  transition: 0.3s;
}

/* --- BACK TO TOP BUTTON --- */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(255, 77, 0, 0.3);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

/* --- RESPONSIVE OVERRIDES --- */
@media (max-width: 900px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: block; }
  
  .nav-toggle { display: flex; }

  .nav-links {
    position: fixed;
    top: 0; right: -100%;
    width: 80%; height: 100vh;
    background: var(--bg);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    box-shadow: -10px 0 30px rgba(0,0,0,0.5);
  }

  .nav-links.active { right: 0; }
  
  .nav-links a { font-size: 24px; font-family: var(--font-display); }

  /* Hero Adjustments */
  .hero-title { font-size: 70px; }
  .hero-bg-text { display: none; }
  .hero-stats {
    position: relative;
    right: auto; top: auto;
    transform: none;
    flex-direction: row;
    gap: 20px;
    margin-top: 40px;
  }
  .stat-num { font-size: 32px; }
  
  /* Section Spacing */
  .section { padding: 80px 0; }
}

/* Hamburger Animation */
.nav-toggle.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.nav-toggle.active span:nth-child(2) { opacity: 0; }
.nav-toggle.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
