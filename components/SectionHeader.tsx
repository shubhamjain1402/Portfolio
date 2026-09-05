import Reveal from './Reveal';
export interface SectionHeading {index:string;label:string;title:string;description:string}
export default function SectionHeader({data}:{data:SectionHeading}){return <Reveal className="section-header"><div><p className="eyebrow">{data.index} / {data.label}</p><h2>{data.title}</h2></div><p className="section-description">{data.description}</p></Reveal>}
