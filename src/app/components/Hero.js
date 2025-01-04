import './Hero.css';
// import AnimateLogo from './Logo';
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
        {/* <AnimateLogo /> */}
        <h1>Hi there! I'm <span id='name'>Kait Rice</span>,</h1>
        <h2>a Full-Stack Developer<br/>based in the Pacific Northwest!</h2>
      </motion.div>
    </header>
  );
}

