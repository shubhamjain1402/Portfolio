import {portfolio} from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';
export default function Contact(){return <section className="section contact container" id="links"><SectionHeader data={portfolio.contactSection}/><Reveal><p className="contact-statement">{portfolio.contactStatement}</p><div className="social-links">{portfolio.social.map(link=><ArrowLink key={link.label} href={link.href}>{link.label}</ArrowLink>)}</div><div className="contact-block"><p className="eyebrow">{portfolio.labels.contact}</p><p>{portfolio.contactText}</p></div></Reveal></section>}
