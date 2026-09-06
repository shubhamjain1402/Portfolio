import type {Metadata} from 'next';
import {Geist,Geist_Mono} from 'next/font/google';
import {portfolio} from '@/data/portfolio';
import './globals.css';
const sans=Geist({subsets:['latin'],variable:'--font-sans',display:'swap'});
const mono=Geist_Mono({subsets:['latin'],variable:'--font-mono',display:'swap'});
export const metadata:Metadata={title:`${portfolio.name} | ${portfolio.title}`,description:portfolio.bio,openGraph:{title:`${portfolio.name} | ${portfolio.title}`,description:portfolio.bio,type:'website'},twitter:{card:'summary',title:portfolio.name,description:portfolio.bio},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
