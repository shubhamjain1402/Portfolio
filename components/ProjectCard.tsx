import ProjectDetails from './ProjectDetails';
import type {Project} from '@/data/portfolio';
import {portfolio} from '@/data/portfolio';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';
export default function ProjectCard({project,index}:{project:Project;index:number}){return <Reveal delay={(index%2)*.1}><article className={`project-card ${project.accent}`}><p className="eyebrow">{project.role}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-impact">{project.impact}</p><div className="feature-grid">{project.features.map((feature,i)=><div key={feature}><span className="feature-fill" style={{height:`${34+i*12}%`}} aria-hidden="true"/><span>{feature}</span></div>)}</div><div className="stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div><div className="project-links"><ProjectDetails project={project}/>{project.live&&<ArrowLink href={project.live}>{portfolio.labels.live}</ArrowLink>}{project.github&&<ArrowLink href={project.github}>{portfolio.labels.github}</ArrowLink>}</div></article></Reveal>}

