import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import "./NavBar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const vh = window.innerHeight;

  const initialValue = 88;
  const finalValue = 66;
  const thresholdY = 0.4 * vh;

  const speed = 1;
  const scrollDistance = (initialValue - finalValue) / speed;

  const startY = 0;
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false,
    }
  );

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  useEffect(() => {
    scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY));
  }, [scrollY, thresholdY]);

  return (
    <motion.div className="navbar" style={{ height: scrollOutput }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isPastThreshold ? 1 : 0,
          scale: isPastThreshold ? 1 : 0.5,
        }}
      >
        Kait Rice
      </motion.div>
      <motion.div style={{ scaleX }} className="progress-bar" />
    </motion.div>
  );
}
