import {portfolio} from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
export default function Projects(){return <section className="section container" id="projects"><SectionHeader data={portfolio.projectsSection}/><Reveal className="stats">{[portfolio.projects.length,1,1].map((n,i)=><div key={portfolio.stats[i]}><strong>{String(n).padStart(2,'0')}</strong><span className="eyebrow">{portfolio.stats[i]}</span></div>)}</Reveal><div className="project-grid">{[...portfolio.projects,portfolio.archive].map((project,i)=><ProjectCard key={project.name} project={project} index={i}/>)}</div></section>}
