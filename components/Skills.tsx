import {portfolio} from '@/data/portfolio';
import Reveal from './Reveal';
export default function Skills(){return <Reveal className="skills"><div className="skills-heading"><div><p className="eyebrow">{portfolio.labels.techStack}</p><h3>{portfolio.labels.skills}</h3></div><span className="eyebrow">{portfolio.skills.length} {portfolio.labels.areas}</span></div>{portfolio.skills.map(category=><div className="skill-category" key={category.name}><h4 className="eyebrow">{category.name}</h4><div className="tags">{category.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</Reveal>}
