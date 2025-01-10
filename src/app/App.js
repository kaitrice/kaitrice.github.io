import './App.css';
import AboutMe from './sections/AboutMe';
// import About from './sections/old/About';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
// import Skills from './data/skills';
import { MotionConfig } from "framer-motion"
import Process from './sections/Process';

// const data = [<Hero />, <About />, <Skills />, <Portfolio />, <Footer />];
const data = [<Hero />, <AboutMe />, <Process />, <Portfolio />,<Footer />];

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="App">
        <Header />
        {data.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    </MotionConfig>
  );
}

export default App;
