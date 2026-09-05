'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export default function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={false} whileInView={reduced?{}:{opacity:[0.25,1],y:[24,0]}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
