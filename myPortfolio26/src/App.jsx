// App.jsx — Root component
import { useState, useEffect } from 'react';
import './index.css';
import './App.css';

// Components
import Ticker    from './components/Ticker';
import Navbar    from './components/Navbar';
import Sidebar   from './components/Sidebar';
import Footer    from './components/Footer';

// Sections
import HeroSection      from './sections/HeroSection';
import AboutSection     from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection    from './sections/SkillsSection';
import ProjectsSection  from './sections/ProjectsSection';
import ContactSection   from './sections/ContactSection';

// Section IDs to track active state
const SECTIONS = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  /* ── Active section tracking via IntersectionObserver ── */
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Ticker (very top) ── */}
      <Ticker />

      {/* ── Navbar ── */}
      <Navbar activeSection={activeSection} />

      {/* ── Sidebar (fixed left) ── */}
      <Sidebar activeSection={activeSection} />

      {/* ── Main content (offset for sidebar + navbar + ticker) ── */}
      <main className="page-layout" id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
