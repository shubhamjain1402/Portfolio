import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import ArrowLink from './ArrowLink';

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeader data={portfolio.projectsSection} />
      <div className="work-index">
        <span className="eyebrow">
          Selected work / {String(portfolio.projects.length).padStart(2, '0')}
        </span>
        <ArrowDownRight size={26} aria-hidden="true" />
      </div>
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <Reveal>
        <aside className="project-archive">
          <div className="archive-mark" aria-hidden="true">
            <ArrowUpRight size={38} />
          </div>
          <div>
            <p className="eyebrow">{portfolio.archive.role}</p>
            <h3>{portfolio.archive.name}</h3>
            <p>{portfolio.archive.description}</p>
          </div>
          <ArrowLink href={portfolio.archive.github}>Explore GitHub</ArrowLink>
        </aside>
      </Reveal>
    </section>
  );
}
