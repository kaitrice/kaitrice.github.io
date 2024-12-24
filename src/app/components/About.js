// import angular from '../../assets/icons/icons8-angularjs.svg';
import bootstrap from '../../assets/icons/icons8-bootstrap.svg';
// import css from '../../assets/icons/icons8-css.svg';
import docker from '../../assets/icons/icons8-docker.svg';
import expo from '../../assets/icons/expo.svg';
// import expressjs from '../../assets/icons/icons8-express-js.svg';
// import firebase from '../../assets/icons/icons8-firebase.svg';
import git from '../../assets/icons/icons8-git.svg';
// import html from '../../assets/icons/icons8-html.svg';
import java from '../../assets/icons/icons8-java.svg';
import javascript from '../../assets/icons/icons8-javascript.svg';
import mysql from '../../assets/icons/icons8-mysql-logo.svg';
import nodejs from '../../assets/icons/icons8-nodejs.svg';
// import postgresql from '../../assets/icons/icons8-postgresql.svg';
import react from '../../assets/icons/icons8-react-native.svg';
import wordpress from '../../assets/icons/icons8-wordpress.svg';

import './About.css'

import { motion } from 'framer-motion';


export default function About() {
  return (
    <div id='about'>
      <div className="bio-container">
        <h3>A little about me...</h3>
        {/* <img src={user} className="profile-icon" alt="user icon" /> */}
        <p>I'm driven by a love for combining the logical side of coding with creative UX design, making every project an exciting challenge. I enjoy JavaScript, React, Node.js, and building responsive, engaging cross-platform apps. I have desire to always learn and improve, doing my best to constantly evolve as a person and developer. Outside of coding I enjoy reading, video games, electronic music, and Red Bull®!</p>
      </div>
      <div>
        <h4>Somethings I know...</h4>
        <Skills />
      </div>
    </div>
  );
}

const data = [
  // { name: 'html', image: html },
  // { name: 'css', image: css },
  { name: 'java', image: java },
  { name: 'javascript', image: javascript },
  { name: 'react', image: react },
  // { name: 'angular', image: angular },
  { name: 'Node.js', image: nodejs },
  { name: 'mysql', image: mysql },
  // { name: 'postgresql', image: postgresql },
  // { name: 'firebase', image: firebase },
  // { name: 'express.js', image: expressjs },
  { name: 'bootstrap', image: bootstrap },
  { name: 'git', image: git },
  { name: 'docker', image: docker },
  { name: 'expo', image: expo },
  { name: 'wordpress', image: wordpress },
];

function Skill({ item }) {

  return (
    <motion.div
      className="card-skills"
      initial={{ opacity: .6 }}
      whileHover={{ scale: 1.25, opacity: 1, transition: { duration: 0.3 } }}
    >
      <img src={item.image} alt={`${item.name} logo`} />
      <p>{item.name}</p>
    </motion.div>
  ) 
}

function Skills() {
  return (
    <div className='container-skills'>
      {data.map((skill, index) => (
        <Skill key={index} item={skill} />
      ))}
    </div>
  );
}