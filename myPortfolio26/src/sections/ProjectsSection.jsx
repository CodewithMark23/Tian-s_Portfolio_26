// ProjectsSection.jsx — Portfolio projects list
import useScrollReveal from '../components/useScrollReveal';

const PROJECTS = [
  {
    num: '01',
    title: 'ROUTERS AND NAVIGATIONS',
    desc: 'Exploring client-side routing patterns and navigation flows using React Router. Covers nested routes, dynamic params, and protected routes.',
    tags: ['React', 'React Router', 'Navigation'],
    href: 'https://drive.google.com/file/d/1W8amiYTnmi7PakUwcIWQNYeIeeZ8Q6S3/view',
  },
  {
    num: '02',
    title: 'SERVICE PLACEHOLDER & ERROR STATE',
    desc: 'UI patterns for handling loading skeletons, service placeholders, and graceful error states — essential for production-ready applications.',
    tags: ['React', 'UX Patterns', 'Error Handling'],
    href: 'https://drive.google.com/file/d/1tp33iCOXlRetXtT1LiI3NYd8gdFSLLqK/view',
  },
  {
    num: '03',
    title: 'SIMPLE TASK MANAGER',
    desc: 'A clean and functional task manager app with CRUD operations, state management, and persistent local storage integration.',
    tags: ['React', 'State Management', 'LocalStorage'],
    href: 'https://drive.google.com/file/d/1Sg5QPadGo79IFRFNlYm9dBAybSzE3Qy0/view',
  },
  {
    num: '04',
    title: 'DRUGS AND MEDICINE STORE',
    desc: 'A pharmacy/medicine store front-end featuring product listings, search, filtering, and a shopping cart interface.',
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
            <span className="section-num">04</span>
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
