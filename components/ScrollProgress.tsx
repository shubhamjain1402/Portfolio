'use client';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="scroll-progress"
      aria-hidden="true"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  );
}
