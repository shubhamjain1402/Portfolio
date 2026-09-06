import { portfolio, type Project } from '@/data/portfolio';
import ProjectDetails from './ProjectDetails';
import ProjectWorkflow from './ProjectWorkflow';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal>
      <article className={`project-card ${project.accent}`}>
        <div className="project-copy">
          <div className="project-heading">
            <span className="project-number">0{index + 1}</span>
            <p className="eyebrow">{project.role}</p>
          </div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-impact">{project.impact}</p>
          <div className="stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-links">
            <ProjectDetails project={project} />
            {project.live && (
              <ArrowLink href={project.live}>{portfolio.labels.live}</ArrowLink>
            )}
            {project.github && (
              <ArrowLink href={project.github}>
                {portfolio.labels.github}
              </ArrowLink>
            )}
          </div>
        </div>
        <ProjectWorkflow project={project} />
      </article>
    </Reveal>
  );
}
