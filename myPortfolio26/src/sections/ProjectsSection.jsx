// ProjectsSection.jsx — Portfolio projects list
import useScrollReveal from '../components/useScrollReveal';

const PROJECTS = [
  {
    num: '01',
    title: 'ROUTERS AND NAVIGATIONS',
    desc: 'Exploring client-side routing patterns and navigation architecture in modern web applications.',
    tags: ['React', 'React Router', 'UX Architecture'],
    href: 'https://drive.google.com/file/d/1W8amiYTnmi7PakUwcIWQNYeIeeZ8Q6S3/view',
  },
  {
    num: '02',
    title: 'SERVICE PLACEHOLDER & ERROR STATE',
    desc: 'Designing and building resilient UI fallback states, service placeholders, and intuitive error screens.',
    tags: ['UI/UX', 'Component Design', 'Error Handling'],
    href: 'https://drive.google.com/file/d/1tp33iCOXlRetXtT1LiI3NYd8gdFSLLqK/view',
  },
  {
    num: '03',
    title: 'SIMPLE TASK MANAGER',
    desc: 'A minimal, focused productivity tool for creating, tracking, and prioritizing everyday tasks and goals.',
    tags: ['JavaScript', 'State Management', 'CRUD'],
    href: 'https://drive.google.com/file/d/1Sg5QPadGo79IFRFNlYm9dBAybSzE3Qy0/view',
  },
  {
    num: '04',
    title: 'DRUGS AND MEDICINE STORE',
    desc: 'An organized inventory and catalog interface for pharmaceutical items with search and category filtering.',
    tags: ['React', 'E-Commerce', 'UI Design'],
    href: 'https://drive.google.com/file/d/1yM_O-aA43Kb2Pq3bbkAVqItdZEfzl2Tu/view',
  },
  {
    num: '05',
    title: 'NAVIGATING POSTMAN',
    desc: 'A guided walkthrough of Postman for API testing — collections, environments, request chaining, and response validation.',
    tags: ['API Testing', 'Postman', 'REST'],
    href: 'https://drive.google.com/file/d/16O8aHfMe-azCujXurD5mRPHsrVW3l5lZ/view',
  },
];

function ProjectRow({ num, title, desc, tags, href }) {
  return (
    <a
      href={href}
      className="project-row"
      aria-label={`View ${title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="project-num-badge">{num}</span>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((t) => (
            <span className="project-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="project-link-col">
        <span className="project-arrow" aria-hidden="true">↗</span>
        <span className="project-view-label">View on Drive</span>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section className="portfolio-section projects-section" id="projects" aria-label="Projects">
      <div className="projects-header">
        <div className="reveal" ref={ref}>
          <div className="section-meta-tag">
            <span className="section-num">05</span>
            <span className="section-label">My Work</span>
          </div>
          <h2 className="section-title-xl">
            PROJECT
            <br />
            <em>PORTFOLIO</em>
          </h2>
        </div>

        <p className="section-body-text" style={{ maxWidth: '28ch', textAlign: 'right' }}>
          A collection of real projects — click any row to view the full work on Google Drive.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.num} {...p} />
        ))}
      </div>
    </section>
  );
}
