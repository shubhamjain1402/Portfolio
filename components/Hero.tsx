import { ArrowDown } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import IdentityCard from './IdentityCard';
import ArrowLink from './ArrowLink';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {portfolio.hero.eyebrow}
            <span className="hero-edition">{portfolio.id}</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>
            {portfolio.name.split(' ').map((word, index) => (
              <span key={word}>
                {word}
                {index === portfolio.name.split(' ').length - 1 && (
                  <span className="name-period" aria-hidden="true">
                    .
                  </span>
                )}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-description">{portfolio.bio}</p>
        </Reveal>
        <Reveal delay={0.24} className="hero-actions">
          <ArrowLink className="button primary" href="#projects">
            {portfolio.hero.primary}
          </ArrowLink>
          <ArrowLink className="button secondary" href="#links">
            {portfolio.hero.secondary}
          </ArrowLink>
        </Reveal>
      </div>
      <Reveal className="hero-badge" delay={0.2}>
        <IdentityCard />
      </Reveal>
      <div className="hero-foot">
        <span className="eyebrow">{portfolio.title}</span>
        <a href="#projects">
          <span>Explore selected work</span>
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
