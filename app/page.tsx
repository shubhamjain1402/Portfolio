import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import TransitionBanner from '@/components/TransitionBanner';
export default function Home(){return <><a className="skip-link" href="#main">Skip to content</a><ScrollProgress/><Navbar/><main id="main"><Hero/><Projects/><TransitionBanner index={0}/><Achievements/><TransitionBanner index={1}/><Education/><TransitionBanner index={2}/><Contact/></main><Footer/></>}
