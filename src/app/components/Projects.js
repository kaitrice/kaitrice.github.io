import { motion } from 'framer-motion';
import Button from './Button';
import './Projects.css'

import panicpal from '../../assets/projects/panic-pal.png'
import chromachoice from '../../assets/projects/chroma-choice.png'
import wwxs from '../../assets/projects/wwxs.png'
import deadwood from '../../assets/projects/deadwood.png'

const data = [
  {
    id: 1,
    rank: 1,
    title: 'Panic Pal', 
    description: 'Mobile app aiming to provide support for individuals experiencing panic attacks. Using OpenAI powered chatbot designed to offer empathetic and supportive conversations to help manage panic attacks effectively.', 
    image: { url: panicpal, alt: "Exmaple" }, 
    link: [ 
      { url: "https://youtu.be/Ueqlpl4Sl4U", label: "Watch View" },
      { url: "https://github.com/kaitrice/panic-pal", label: "Learn More" },
    ],
  },
  {
    id: 2,
    rank: 1,
    title: 'Chroma Choice', 
    description: 'A color-guessing game designed to challenge your perception of color shades.', 
    image: { url: chromachoice, alt: "Exmaple" }, 
    link: [ 
      // { url: "https://kaitrice.github.io/fun/chromachoice/", label: "Visit website" },
      // { url: "https://github.com/kaitrice/chroma-choice", label: "View project" },
    ],
  },
  {
    id: 3,
    rank: 1,
    title: 'Water Weather Station', 
    description: 'IoT project involving a buoy device for real-time water data collection, a mobile app for data retrieval and uploading via APIs, and a responsive web UI and REST API for data management and visualization.', 
    image: { url: wwxs, alt: "Exmaple" }, 
    link: [ 
      { url: "https://seadc-waterweatherstation.cyberrangepoulsbo.com/", label: "Visit website" },
      { url: "https://github.com/GearyER/WWXS", label: "View project" },
    ],
  },
  {
    id: 4,
    rank: 0,
    title: 'Deadwood', 
    description: 'Digital version of the board game `Deadwood` using a GUI toolkit for Java applications. The project focuses on applying Object-Oriented Design (OOD) principles to create a robust and interactive game environment.', 
    image: { url: deadwood, alt: "Exmaple" }, 
    link: [ 
      { url: "https://github.com/kaitrice/deadwood", label: "View project" },
    ],
  },
  // {
  //   id: 5,
  //   rank: 1,
  //   title: 'expample 5', 
  //   description: 'lorem', 
  //   image: { url: "http://via.placeholder.com/600x400", alt: "Exmaple" }, 
  //   link: [ 
  //     { url: "https://kaitrice.github.io/project/", label: "Visit website" },
  //     { url: "https://github.com/kaitrice/example", label: "View project" },
  //   ],
  // },
];

function sortData() {
  return data.sort((a, b) => {
    if (a.rank !== b.rank) {
      return b.rank - a.rank; // Sort by rank (descending)
    }
    return a.id - b.id; // Sort by id (ascending) if ranks are equal
  });
}

function Project({ item }) {
  return (
    <motion.div
      className="card-project"
      initial={{ 
        scale: .98 ,
        backgroundImage: `url(${item.image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'transparent',
      }}
      whileHover={{ 
        scale: 1.05, 
        background: 'var(--color2)', 
        color: 'var(--color1)', 
        borderRadius: '1em', 
        transition: { duration: 0.5 } 
      }}
    >
      <div className="card-content" >
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="card-link">
          {item.link.map((link, index) => (
            <Button key={index} link={link.url} className="card-button">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sortedData = sortData();

  return (
    <div id='projects'>
      <h2>Projects</h2>
      <div className="project-list">
        {sortedData.map((project) => (
          <Project key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
}
