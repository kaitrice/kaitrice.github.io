import './Footer.css';
import Icon from './Icon';
import { motion } from "motion/react";

const socials = [
  { url: "", icon: <Icon name={"linkedin"} /> },
  { url: "", icon: <Icon name={"github"} /> },
]

export default function Footer() {
  let year = new Date().getUTCFullYear()

  return (
    <div id='footer'>
      <motion.div 
        id='bio'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Let's Connect!</h2>
        <p>Want to work together or have any questions? <br/>
        I'd love to hear from you!</p>
        <div className='socials'>
          {socials.map((social, index) => (
            <a
              key={index}
              className="social"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>Kait Rice © {year}</p>
      </motion.div>
    </div>
  );
}
