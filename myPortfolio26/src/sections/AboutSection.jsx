// AboutSection.jsx
import useScrollReveal from '../components/useScrollReveal';
import aboutImg from '/tian_about.jpg';

export default function AboutSection() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <>
      <section
        className="portfolio-section intro-text-section"
        id="about"
        aria-label="Introduction"
      >
        <div className="intro-text-inner reveal" ref={ref1}>
          <div className="section-meta-tag">
            <span className="section-num">01</span>
            <span className="section-label">Introduction</span>
          </div>

          <h2 className="section-title-xl">
            INTRO
            <br />
            DUCTION
          </h2>

          <div className="thin-rule" />

          <p className="section-body-text">
            Hi, I&apos;m Tian — an aspiring web and app developer passionate about
            crafting beautiful, functional digital experiences. I believe great
            design and clean code go hand in hand.
          </p>
          <p className="section-body-text" style={{ marginTop: '1rem' }}>
            Currently on my learning journey, exploring the full stack: from
            pixel-perfect frontends to robust backend systems. Every project is
            a new adventure.
          </p>
        </div>
      </section>

      <section
        className="portfolio-section split-section"
        id="about-name"
        aria-label="About Tian"
      >
        <div className="split-text-col">
          <div className="reveal" ref={ref2}>
            <div className="section-meta-tag">
              <span className="section-num">02</span>
              <span className="section-label">About Me</span>
            </div>

            <h2 className="section-title-xl">TIAN</h2>

            <div className="thin-rule" />

            <p className="section-body-text">
              A creative mind with a passion for technology and design. Currently
              pursuing knowledge in web technologies and mobile app development,
              turning ideas into interactive realities.
            </p>

            <ul className="about-list">
              <li>📍 &nbsp;Philippines</li>
              <li>🎓 &nbsp;Self-taught Developer</li>
              <li>💻 &nbsp;Open to Opportunities</li>
              <li>🏆 &nbsp;2nd Runner Up — Tekbayan</li>
            </ul>
          </div>
        </div>

        <div className="split-img-col">
          <img
            src={aboutImg}
            alt="Tian — profile photo"
            style={{ objectPosition: 'top center' }}
          />
        </div>
      </section>
    </>
  );
}
