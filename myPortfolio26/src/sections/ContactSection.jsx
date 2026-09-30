// ContactSection.jsx — Let's Connect
import useScrollReveal from '../components/useScrollReveal';

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section className="portfolio-section contact-section" id="contact" aria-label="Contact">
      <div className="contact-text reveal" ref={ref}>
        <div className="section-meta-tag">
          <span className="section-num">06</span>
          <span className="section-label">Get in Touch</span>
        </div>

        <h2 className="section-title-xl">
          LET&apos;S
          <br />
          <em>CONNECT</em>
        </h2>

        <p className="contact-sub">
          Interested in collaborating, have a project in mind, or just want to
          say hello? I&apos;d love to hear from you. I&apos;m always open to new
          opportunities and learning experiences.
        </p>

        <div className="contact-actions">
          <a href="mailto:tian@portfolio.dev" className="btn-primary">
            Email Me ↗
          </a>
          <a href="#" className="btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-deco" aria-hidden="true">TIAN</div>
    </section>
  );
}
