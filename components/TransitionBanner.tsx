import {portfolio} from '@/data/portfolio';
import Reveal from './Reveal';
export default function TransitionBanner({index}:{index:number}){return <Reveal className="transition container"><p className="eyebrow">{portfolio.labels.transition} {String(index+1).padStart(2,'0')}</p><p className="transition-phrase">{portfolio.transitions[index]}</p></Reveal>}
