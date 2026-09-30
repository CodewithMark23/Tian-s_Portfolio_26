// SkillsSection.jsx — Personal Skills grid with animated bars
import { useEffect, useRef } from 'react';

const SKILLS = [
  { id: 'html',   icon: '⟨/⟩', name: 'HTML & CSS',        pct: 75 },
  { id: 'js',     icon: 'JS',  name: 'JavaScript',         pct: 55 },
  { id: 'design', icon: '✦',   name: 'UI / UX Design',     pct: 70 },
  { id: 'react',  icon: '⚛',   name: 'React (Learning)',   pct: 35 },
  { id: 'git',    icon: '⎇',   name: 'Git & GitHub',       pct: 60 },
  { id: 'mobile', icon: '📱',  name: 'App Dev (Learning)', pct: 25 },
];

function SkillCard({ icon, name, pct }) {
  const barRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const bar  = barRef.current;
    if (!card || !bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${pct}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="skill-card reveal" ref={cardRef}>
      <span className="skill-icon">{icon}</span>
      <h3 className="skill-name">{name}</h3>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" ref={barRef} style={{ width: 0 }} />
      </div>
      <span className="skill-pct">{pct}%</span>
    </div>
  );
}

export default function SkillsSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="portfolio-section skills-section" id="skills" aria-label="Skills">
      <div className="skills-header">
        <div className="reveal" ref={headerRef}>
          <div className="section-meta-tag">
            <span className="section-num">04</span>
            <span className="section-label">Capabilities</span>
          </div>
          <h2 className="section-title-xl">
            PERSONAL
            <br />
            <em>SKILLS</em>
          </h2>
        </div>

        <p className="section-body-text" style={{ maxWidth: '28ch', textAlign: 'right' }}>
          Always learning, always growing. These are my current proficiency levels.
        </p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((s) => (
          <SkillCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}
