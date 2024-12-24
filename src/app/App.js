// import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const sections = [<Header />, <About />, <Projects />, <Contact />];

function App() {

  return (
    <div className="App">
      <NavBar />
      
      {sections.map((item, index) => (
        <Section key={index}>{item}</Section>
      ))}
    </div>
  );
}

export default App;
