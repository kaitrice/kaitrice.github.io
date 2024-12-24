import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  } from "framer-motion";
import './Section.css';
export default function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.span
        className="container-section"
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -200,
        }}
        transition={{
          opacity: { duration: 0.9, ease: "easeInOut" }, 
          y: { duration: 0.9, ease: "easeInOut" },
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
