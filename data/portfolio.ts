export interface Project { name: string; role: string; description: string; impact: string; features: string[]; stack: string[]; live?: string; github?: string; accent: string; workflow?: { input: string; engine: string; outputs: string[] }; }
export interface Achievement { name: string; issuer: string; description: string; year?: string; url?: string; }
export interface Education { dates: string; university: string; degree: string; specialization: string; topics: string[]; }
export interface SkillCategory { name: string; items: string[]; }
export interface SocialLink { label: string; href: string; }
export const portfolio = {
 name: 'Shubham Jain', initials: 'SJ', id: '#1402', title: 'AI, Machine Learning & Full-Stack Development',
 bio: 'I build useful things with AI. Machine learning, computer vision, and thoughtful software—from the first model to the final interface.',
 portrait: null as string | null,
 access: ['AI', 'ML', 'Full-stack', 'Computer vision'],
 capabilities: ['Machine learning', 'Computer vision', 'Backend APIs', 'Recommendation systems'],
 status: 'Building with purpose',
 navigation: [{label:'Projects',href:'#projects'},{label:'Achievements',href:'#achievements'},{label:'Education',href:'#education'},{label:'Contact',href:'#links'}],
 hero: {eyebrow:'Digital identity',primary:'View projects',secondary:'Connect',scroll:'Scroll'},
 projectsSection: {index:'01',label:'Projects',title:'Built to be useful.',description:'Applied machine learning, computer vision, and full-stack projects—from models to usable applications.'},
 projects: [
 {name:'AgriVit',role:'Machine Learning / Full-Stack Development',description:'An agriculture platform bringing crop recommendations, fertilizer advice, and pest detection into a single workflow.',impact:'Combines ensemble learning on soil and environmental data with a CNN-based pest detection pipeline.',features:['Crop recommendation','Fertilizer advisory','Pest detection','Web interface'],stack:['Python','Scikit-learn','TensorFlow','OpenCV'],live:'https://agrivit-sentinel-main.vercel.app/',accent:'green',workflow:{input:'Soil, environment & crop images',engine:'Ensemble learning + CNN',outputs:['Crop recommendations','Fertilizer advice','Pest detection']}},
 {name:'Career Quest',role:'Recommendation Systems / AI Development',description:'Personalized career and course discovery, paired with AI-powered mock interviews.',impact:'Matches interests to learning paths and supports voice-based interview practice with tailored feedback.',features:['Career prediction','Course matching','Mock interviews','Voice feedback'],stack:['Python','Scikit-learn','Gemini API'],live:'https://career-quest-hire.vercel.app/',accent:'teal',workflow:{input:'Interests, résumé & target role',engine:'Recommendations + Gemini',outputs:['Learning paths','Career suggestions','Interview feedback']}},
 {name:'AI-DOCTOR',role:'NLP / Computer Vision Development',description:'A conversational assistant for basic health queries and preliminary guidance.',impact:'Connects a rule-based and NLP-driven conversation flow with OpenCV prescription text extraction.',features:['Conversational flow','Symptom queries','Text extraction','Computer vision'],stack:['Python','OpenCV','NLP'],github:'https://github.com/shubhamjain1402/AI-DOCTOR',accent:'pink',workflow:{input:'Health queries & prescription images',engine:'NLP + computer vision',outputs:['Conversational guidance','Prescription text extraction']}}
 ] satisfies Project[],
 archive: {name:'More Projects',role:'Project archive / GitHub profile',description:'A collection of experiments, prototypes, and learning projects across my GitHub profile.',impact:'Explore more work in software development, data science, and algorithms.',features:['Repositories','Experiments','Prototypes','Learning logs'],stack:['Python','C++','Web development'],github:'https://github.com/shubhamjain1402',accent:'blue'} satisfies Project,
 stats: ['Featured projects','Project archive','Shipping mindset'],
 transitions: ['Prototypes become products','Learning becomes capability','Intelligence becomes execution'],
 achievementsSection: {index:'02',label:'Achievements',title:'Always learning.',description:'Certifications and challenge participation across machine learning, cloud computing, and software development.'},
 achievementStatement:'Strong foundations. Practical challenges. Continuous learning.',
 achievementTags: ['Machine learning','Cloud','Software development','ML challenge'],
 achievements: [
 {name:'Machine Learning Specialization',issuer:'Andrew Ng · Coursera',description:'Machine learning foundations and model development.',url:'https://www.coursera.org/account/accomplishments/specialization/certificate/PEAZYKEER7N4'},
 {name:'Machine Learning with Python',issuer:'Coursera',description:'Applied machine learning using Python.'},
 {name:'Cloud Computing',issuer:'NPTEL',description:'Foundations of cloud computing and distributed infrastructure.',url:'https://nptel.ac.in/noc/E_Certificate/NPTEL25CS11S104030054104252340'},
 {name:'Career Essentials in Software Development',issuer:'Microsoft & LinkedIn',description:'Core concepts and practices in software development.',url:'https://www.linkedin.com/learning/certificates/20ba8f549e262b8b4e61110b55312b7873f504c501ec767f334b2bdb451adde6'},
 {name:'Amazon ML Challenge',issuer:'Amazon ML Challenge',description:'Participated in the Amazon ML Challenge, applying machine learning in a competitive setting.'}
 ] satisfies Achievement[],
 educationSection: {index:'03',label:'Education',title:'The foundations.',description:'A computer science foundation at VIT Bhopal, with a focus on artificial intelligence and machine learning.'},
 educationStatement:'Algorithms, systems, and learning—the foundations behind the work.',
 education: {dates:'2023 — 2027',university:'Vellore Institute of Technology, Bhopal',degree:'B.Tech · Computer Science & Engineering',specialization:'Specialization in Artificial Intelligence and Machine Learning.',topics:['Artificial Intelligence','Machine Learning','Data Structures','DBMS','Computer Networks']} satisfies Education,
 skills: [
 {name:'Languages',items:['C++','Python','Java']},
 {name:'AI / ML',items:['NumPy','Pandas','Scikit-learn','TensorFlow','Keras','OpenCV']},
 {name:'Frontend / Backend',items:['HTML','CSS','JavaScript','FastAPI','SQL','MySQL','MongoDB']},
 {name:'Cloud / Tools',items:['AWS','Docker','Git']}
 ] satisfies SkillCategory[],
 contactSection: {index:'04',label:'Links',title:'Good things start with a conversation.',description:'Interested in practical projects where AI, data, and thoughtful software engineering come together.'},
 contactStatement:'Ideas, experiments, and conversations that lead to something useful.',
 contactText:'Open to collaborating on AI, machine learning, computer vision, and full-stack applications.',
 social: [{label:'GitHub',href:'https://github.com/shubhamjain1402'},{label:'LinkedIn',href:'https://www.linkedin.com/in/shubham-jain1402/'},{label:'Email',href:'mailto:shubhamjain6859@gmail.com'}] satisfies SocialLink[],
 labels: {portfolioId:'Portfolio ID',name:'Name',access:'Access',details:'Details',live:'Live',github:'GitHub',milestone:'Milestone',issuer:'Issuer',verify:'Verify badge',transition:'Transition',techStack:'Tech stack',skills:'Skills and tools',areas:'areas',contact:'Contact me'},
};
