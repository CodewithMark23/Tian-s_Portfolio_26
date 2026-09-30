// HeroSection.jsx — Full editorial hero with Tian's real photo
import useScrollReveal from '../components/useScrollReveal';
import heroImg from '/tian_hero.jpg';

export default function HeroSection() {
  const ref = useScrollReveal();

  return (
    <section className="portfolio-section hero-section" id="hero" aria-label="Hero">
      <div className="hero-meta-bar">
        <span className="hero-meta-label">Creative Portfolio</span>
        <span className="hero-meta-label">2026</span>
      </div>

      <div className="hero-text reveal" ref={ref}>
        <p className="hero-eyebrow">Presentation by <strong style={{ color: 'var(--white)', letterSpacing: '0.18em' }}>TIAN</strong></p>

        <h1 className="hero-title">
          TIAN&apos;S
          <span className="italic-line">PORTFOLIO</span>
        </h1>

        <div className="hero-contact-row">
          <span className="hero-contact-item">@tian.dev</span>
          <span className="hero-contact-item">Philippines</span>
          <span className="hero-contact-item">tian@portfolio.dev</span>
        </div>
      </div>

      <div className="hero-image-col">
        <div className="hero-img-frame">
          <img src={heroImg} alt="Tian — 2nd Runner Up award" />
        </div>
        <div className="hero-badge">
          <span>Available</span>
          <span>for work</span>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}
