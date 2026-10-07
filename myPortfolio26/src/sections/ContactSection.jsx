// ContactSection.jsx — Let's Connect
import useScrollReveal from '../components/useScrollReveal';
import CommissionForm from '../components/CommissionForm';

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section className="portfolio-section contact-section" id="contact" aria-label="Contact">
      <div className="contact-text reveal" ref={ref}>
        <div className="section-meta-tag">
          <span className="section-num">05</span>
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
          <a href="mailto:chickennutbread10@gmail.com" className="btn-primary">
            chickennutbread10@gmail.com ↗
          </a>
          <a href="mailto:markchristianvillanueva23@gmail.com" className="btn-ghost">
            markchristianvillanueva23@gmail.com ↗
          </a>
        </div>

        <CommissionForm />
      </div>

      {/* Decorative large text */}
      <div className="contact-deco" aria-hidden="true">TIAN</div>
    </section>
  );
}
