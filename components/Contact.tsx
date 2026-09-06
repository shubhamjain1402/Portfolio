import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';

export default function Contact() {
  const email = portfolio.social.find((link) => link.label === 'Email');
  return (
    <section className="section contact container" id="links">
      <SectionHeader data={portfolio.contactSection} />
      <Reveal>
        <div className="contact-surface">
          <div>
            <p className="eyebrow">{portfolio.labels.contact}</p>
            <p className="contact-invitation">
              Have something
              <br />
              in mind?
            </p>
            {email && (
              <ArrowLink className="contact-email" href={email.href}>
                {email.href.replace('mailto:', '')}
              </ArrowLink>
            )}
          </div>
          <ArrowUpRight
            className="contact-arrow"
            strokeWidth={0.7}
            aria-hidden="true"
          />
          <p className="contact-note">{portfolio.contactText}</p>
        </div>
        <div className="social-links">
          {portfolio.social.map((link, index) => (
            <ArrowLink key={link.label} href={link.href}>
              <span className="social-number">0{index + 1}</span>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
