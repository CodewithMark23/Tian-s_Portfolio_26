// Footer.jsx — Site footer
const FOOTER_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo">
          Tian<span>.</span>
        </div>
        <p>Web &amp; App Developer</p>
      </div>

      {/* Nav */}
      <nav aria-label="Footer navigation">
        <ul className="footer-nav-links" role="list">
          {FOOTER_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="footer-nav-link"
                onClick={(e) => handleNav(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right */}
      <div className="footer-right">
        <p className="footer-copy">© 2026 Tian. All rights reserved.</p>
        <p className="footer-built">Built with React &amp; Vite ✦</p>
      </div>
    </footer>
  );
}
