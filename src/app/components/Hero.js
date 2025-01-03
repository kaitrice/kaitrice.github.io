import './Hero.css';
import AnimateLogo from './Logo';
import { motion } from "motion/react";

export default function Hero() {
  return (
    <header id="hero">
      <motion.div 
        id='bio'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <AnimateLogo />
        <h1>Kait Rice</h1>
        <h2>Full-Stack Developer</h2>
      </motion.div>
    </header>
  );
}

