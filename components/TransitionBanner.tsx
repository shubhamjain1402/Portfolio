import { portfolio } from '@/data/portfolio';
import Reveal from './Reveal';
export default function TransitionBanner({ index }: { index: number }) {
  return (
    <Reveal className="transition container">
      <p className="eyebrow">
        <span className="chapter-number">0{index + 1}</span>
        {portfolio.labels.transition}
      </p>
      <p className="transition-phrase">{portfolio.transitions[index]}</p>
      <span className="transition-rule" aria-hidden="true" />
    </Reveal>
  );
}
