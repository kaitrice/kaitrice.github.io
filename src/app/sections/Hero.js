import AnimatedTypewriter from '../components/animTyping';
import Icon from '../components/Icon';
import pdf from '../../assets/KaitlynRice-Resume.pdf'
import './Hero.css';
import { motion } from "motion/react";

const titles = [
  "Software Engineer", 
  "Frontend Developer", 
  "Full-stack Developer", 
  "UX Designer"
];
const socials = [
  { url: "https://linked.in/kaitrice/", icon: <Icon name={"linkedin"} /> },
  { url: "https://github.com/kaitrice/", icon: <Icon name={"github"} /> },
]

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
        <h1>Hi there!<br />I'm <span className='color'>Kait Rice</span>,</h1>
        <div id='connect'>
          <a
            className="link"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <h2>
          <span id='title'>a <AnimatedTypewriter messages={titles} /></span><br/>
          <span>based in the PNW!</span>
        </h2>
      </motion.div>
    </header>
  );
}

