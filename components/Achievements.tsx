import {portfolio} from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import AchievementCard from './AchievementCard';
import Reveal from './Reveal';
export default function Achievements(){return <section className="section container" id="achievements"><SectionHeader data={portfolio.achievementsSection}/><div className="record-grid"><Reveal className="record-intro"><p className="editorial-statement">{portfolio.achievementStatement}</p><div className="tags">{portfolio.achievementTags.map(tag=><span key={tag}>{tag}</span>)}</div></Reveal><div>{portfolio.achievements.map((achievement,i)=><AchievementCard key={achievement.name} achievement={achievement} index={i}/>)}</div></div></section>}
