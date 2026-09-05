import {portfolio} from '@/data/portfolio';
import IdentityCard from './IdentityCard';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';
export default function Hero(){return <section className="hero container" id="top"><div className="hero-copy"><Reveal><p className="eyebrow hero-eyebrow">{portfolio.hero.eyebrow}</p></Reveal><Reveal delay={.1}><h1>{portfolio.name.split(' ').map(word=><span key={word}>{word}</span>)}</h1></Reveal><Reveal delay={.2}><p className="hero-description">{portfolio.bio}</p></Reveal><Reveal delay={.3} className="hero-actions"><ArrowLink className="button primary" href="#projects">{portfolio.hero.primary}</ArrowLink><ArrowLink className="button" href="#links">{portfolio.hero.secondary}</ArrowLink></Reveal></div><Reveal delay={.25}><IdentityCard/></Reveal></section>}
