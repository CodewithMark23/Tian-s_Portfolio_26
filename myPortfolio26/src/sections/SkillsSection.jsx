// SkillsSection.jsx — Focused capability cards
import useScrollReveal from '../components/useScrollReveal';

const SKILL_CARDS = [
  {
    num: '01',
    category: 'Web Development',
    items: [
      'Frontend development',
      'Responsive websites',
      'Modern web interfaces',
    ],
  },
  {
    num: '02',
    category: 'App Development',
    items: [
      'Application development',
      'UI implementation',
      'Functional app interfaces',
    ],
  },
  {
    num: '03',
    category: 'Design & AI Prompting',
    items: [
      'UI/UX design',
      'Visual design',
      'AI prompting and AI-assisted workflows',
    ],
  },
];

export default function SkillsSection() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="portfolio-section skills-section" id="skills" aria-label="Skills">
      <div className="skills-header reveal" ref={headerRef}>
        <div>
          <div className="section-meta-tag">
            <span className="section-num">03</span>
            <span className="section-label">Capabilities</span>
          </div>
          <h2 className="section-title-xl">
            PERSONAL
            <br />
            <em>SKILLS</em>
          </h2>
        </div>

        <p className="section-body-text skills-intro-text">
          The areas I currently focus on across development, design, and AI-assisted workflows.
        </p>
      </div>

      <div className="skills-grid reveal" ref={gridRef}>
        {SKILL_CARDS.map(({ num, category, items }) => (
          <div className="skill-card" key={num}>
            <div className="skill-card-top">
              <span className="skill-card-num">{num}</span>
              <span className="skill-card-bullet">✦</span>
            </div>
            <h3 className="skill-card-title">{category}</h3>
            <div className="skill-card-divider" />
            <ul className="skill-card-list">
              {items.map((item) => (
                <li key={item} className="skill-card-item">
                  <span className="skill-bullet">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
