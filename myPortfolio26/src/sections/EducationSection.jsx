// EducationSection.jsx — History & Education — TEXT ONLY (no image)
import useScrollReveal from '../components/useScrollReveal';

const TIMELINE = [
  { year: '2024 — Present', desc: 'Self-studying web development — HTML, CSS, JavaScript & React' },
  { year: '2023',           desc: 'Exploring programming fundamentals and UI/UX design principles' },
  { year: '2022',           desc: 'Discovered a passion for technology and creative problem solving' },
];

export default function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section
      className="portfolio-section edu-text-section"
      id="education"
      aria-label="Education"
    >
      <div className="edu-text-inner reveal" ref={ref}>
          <div className="section-meta-tag">
            <span className="section-num">02</span>
            <span className="section-label">Background</span>
          </div>

        <h2 className="section-title-xl">
          HISTORY
          <br />
          <em>EDUCATION</em>
        </h2>

        <div className="thin-rule" />

        <div className="timeline">
          {TIMELINE.map(({ year, desc }) => (
            <div className="timeline-item" key={year}>
              <span className="timeline-year">{year}</span>
              <p className="timeline-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
