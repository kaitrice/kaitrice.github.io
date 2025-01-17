import './App.css';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import { MotionConfig } from "framer-motion"
import Process from './sections/Process';

const data = [<Hero />, <AboutMe />, <Portfolio />, <Process />, <Footer />];

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
