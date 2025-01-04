import './About.css';
import pdf from '../../assets/KaitlynRice-Resume.pdf'

export default function About() {
  return (
    <div id='about'>
      <div id='bio'>
        <h3>A little about me</h3>
        <p>I'm driven by a love for combining the logical side of coding with creative UX design, making every project an exciting challenge. I enjoy JavaScript, React, Node.js, and building responsive, engaging cross-platform apps. I have desire to always learn and grow, doing my best to constantly evolve as a person and developer!</p>
        <p>When I'm not working, I enjoy hanging out with my two <span id='cats'>orange cats</span>, playing video games, enjoying live music, and drinking <span id='redbull'>Red Bull®</span>.</p>
        <a
          className="link"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

