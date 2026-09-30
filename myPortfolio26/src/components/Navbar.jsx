// Navbar.jsx — Fixed top navigation bar
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      {/* Brand */}
      <div className="nav-brand">
        <span className="nav-logo">T<span>.</span></span>
        <span className="nav-tagline">Creative Portfolio</span>
      </div>

      {/* Links */}
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="nav-cta" onClick={(e) => handleNav(e, '#contact')}>
        Hire Me
      </a>

      {/* Burger */}
      <button
        className="nav-burger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
      </button>
    </nav>
  );
}
