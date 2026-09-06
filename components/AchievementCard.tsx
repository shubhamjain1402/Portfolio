import type { Achievement } from '@/data/portfolio';
import { portfolio } from '@/data/portfolio';
import Reveal from './Reveal';
import ArrowLink from './ArrowLink';
export default function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <Reveal>
      <article className="achievement-card">
        <div className="milestone-meta">
          <span className="eyebrow">
            {portfolio.labels.milestone} {String(index + 1).padStart(2, '0')}
          </span>
          {achievement.year && <span>{achievement.year}</span>}
        </div>
        <h3>{achievement.name}</h3>
        <p>{achievement.description}</p>
        <p className="eyebrow issuer">
          {portfolio.labels.issuer}: {achievement.issuer}
        </p>
        {achievement.url && (
          <ArrowLink href={achievement.url}>
            {portfolio.labels.verify}
          </ArrowLink>
        )}
      </article>
    </Reveal>
  );
}
