import './Header.css';
import { motion, useSpring, useScroll } from "motion/react"
import logo from '../../assets/logo64.svg'
// import fullLogo from '../../assets/full-logo.svg'

const navigation = [
  {name: "Home", id: "#"},
  {name: "About", id: "#about"},
  {name: "Portfolio", id: "#portfolio"},
  {name: "Contact", id: "#footer"},
]

export default function Header() {
  return (
    <div id='header'>
      <div className='content'>
        {/* <img src={logo} alt='KR logo'/> */}
        <div id='logo' />
        <div className='nav-container'>
          {navigation.map((item, index) => (
            <a
              key={index}
              className="nav-item"
              href={item.id}
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
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

