import { portfolio } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import Skills from './Skills';
import Reveal from './Reveal';
export default function Education() {
  const e = portfolio.education;
  return (
    <section className="section container" id="education">
      <SectionHeader data={portfolio.educationSection} />
      <div className="record-grid">
        <Reveal>
          <p className="editorial-statement">{portfolio.educationStatement}</p>
        </Reveal>
        <div>
          <Reveal>
            <article className="education-card">
              <p className="eyebrow">{e.dates}</p>
              <h3>{e.university}</h3>
              <p className="degree">{e.degree}</p>
              <p>{e.specialization}</p>
              <div className="tags">
                {e.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </article>
          </Reveal>
          <Skills />
        </div>
      </div>
    </section>
  );
}
