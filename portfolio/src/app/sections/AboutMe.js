import './AboutMe.css'
import Skills from '../components/Skills'

export default function AboutMe() {
  return (
    <section id='about'>

      <section id='intro'>
        <h2 className="section-header">Introduction</h2>
        <h3>A little about me</h3>
        <div>
          <p>I'm driven by a love for combining the logical side of coding with creative UX design, making every project an exciting challenge. I enjoy JavaScript, React, Node.js, and building responsive, engaging cross-platform apps. I have desire to always learn and grow, doing my best to constantly evolve as a person and developer!</p>
          <p>When I'm not working, I enjoy hanging out with my two <span id='cats'>orange cats</span>, playing video games, enjoying live music, and drinking <span id='redbull'>Red Bull®</span>.</p>
        </div>
      </section>

      <section id='tech-stack'>
        <h2 className="section-header">Tech Stack</h2>
        <h3>Some things I know</h3>
        <Skills />
      </section>
    </section>
  );
}

