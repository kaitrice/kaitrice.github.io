import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './data/skills';
import { MotionConfig } from "framer-motion"

const data = [<Hero />, <About />, <Skills />, <Portfolio />, <Footer />];

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
