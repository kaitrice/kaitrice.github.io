import './Contact.css'
import { motion } from 'framer-motion';
import githubLogo from '../../assets/icons/github-mark.svg'
import linkedinLogo from '../../assets/icons/linkedin.svg'
// import Button from './Button';

const data = [
  { image: linkedinLogo, alt: "linkedin logo", url: 'https://linked.in/kaitrice/' },
  { image: githubLogo, alt: "github logo", url: 'https://github.com/kaitrice/' },
  // { image: mailLogo, alt: "mail envelope", url: 'mailto:kait@kaitrice.com' },
]

function Socials() {
  return (
    <span className='footer-icons'>
      {data.map((item, index) => (
        <motion.div
        key={index}
        initial={{ opacity: .6 }}
        whileHover={{ scale: 1.25, opacity: 1, transition: { duration: 0.3 } }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.image} alt={item.alt} />
        </a>
      </motion.div>
      ))}
    </span>
  )
}

export default function Contact() {
  return (
    <div id="contact">
      <h2>Let's Connect!</h2>
      <p>Want to work together or have any questions?<br />I'd love to hear from you!</p>
      {/* <ContactForm /> */}
      <footer>
        <Socials />
        <p className='footer-title'>Kait Rice © 2025</p>
      </footer>
    </div>
  );
}