// AboutSection.jsx — Focused About Me section with balanced profile photo
import useScrollReveal from '../components/useScrollReveal';
import aboutImg from '/tian_about.jpg';

export default function AboutSection() {
  const textRef = useScrollReveal();
  const imgRef = useScrollReveal();

  return (
    <section
      className="portfolio-section about-me-section"
      id="about"
      aria-label="About Tian"
    >
      <div className="about-me-container">
        <div className="about-text-col reveal" ref={textRef}>
          <div className="section-meta-tag">
            <span className="section-num">01</span>
            <span className="section-label">About Me</span>
          </div>

          <h2 className="section-title-xl">
            ABOUT
            <br />
            <em>ME</em>
          </h2>

          <div className="thin-rule" />

          <p className="section-body-text">
            Hi, I&apos;m <strong>Tian</strong> — an aspiring web and app developer passionate about
            crafting beautiful, functional digital experiences. I believe great
            design and clean code go hand in hand.
          </p>

          <p className="section-body-text" style={{ marginTop: '1rem' }}>
            Currently on my learning journey, exploring the full stack: from
            pixel-perfect, responsive frontends to robust backend systems and functional mobile app interfaces.
            Every project is an opportunity to solve real problems and create intuitive user experiences.
          </p>

          <ul className="about-list">
            <li>📍 &nbsp;Philippines</li>
            <li>🎓 &nbsp;Self-taught Developer</li>
            <li>💻 &nbsp;Open to Opportunities</li>
            <li>🏆 &nbsp;2nd Runner Up — Frostbyte Hackathon 2026
            </li>
          </ul>
        </div>

        {/* Tian's headshot — occupies ~35–45% on desktop, nicely framed */}
        <div className="about-image-col reveal" ref={imgRef}>
          <div className="about-image-wrapper">
            <img
              src={aboutImg}
              alt="Tian — profile photo"
              className="about-profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
