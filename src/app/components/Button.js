import * as motion from "motion/react-client";
import './Button.css';

export default function Button({ link, children }) {
  return (
    <a
      className="link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        className="link-container"
        whileHover={{
          scale: 1.1,
          borderBottomColor: 'var(--accent)',
          
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        {children}
      </motion.div>
    </a>
  );
}
