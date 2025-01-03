import './Header.css';
import { motion, useSpring, useScroll } from "motion/react"

export default function Header() {
  return (
    <div id='header'>
      {/* <div className='nav-container'>
        <h5>Kait Rice</h5>
        <div className='nav'></div>
      </div> */}
      <ProgressBar />
    </div>
  );
}

/* ---------------- */
function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        id="progress-bar"
        style={{
          scaleX,
          position: "sticky",
          height: 5,
          originX: 0,
          backgroundColor: "var(--blue)",
        }}
      />
    </>
  )
}

