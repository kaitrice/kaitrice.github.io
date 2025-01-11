import './Portfolio.css'
import Icon from '../components/Icon';
import wwxs from '../../assets/covers/wwxs.png';
import colorMatch from "../../assets/covers/color-match.png";
import deadwood from "../../assets/covers/deadwood.png";
import panicPal from "../../assets/covers/panic-pal.png";
import safetyHub from "../../assets/covers/safety-hub.png";

function Program({ item }) {
  return (
    <div className='program'>
      <img src={item.cover} alt={`${item.name} project cover`} className='cover' />
      <div className='info'>
        <div className='info-header'>
          <h4>{item.name}</h4>
          <span className="program-links">
            {item.links.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.name === "github" ? (
                  <Icon name="github" />
                ) : (
                  <Icon name="open" />
                )}
              </a>
            ))}
          </span>
        </div>
        <p>{item.description}</p>
        <div className="langs">
          {item.languages.map((lang, index) => (
            <Icon key={index} name={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <section>
        <h2 className="section-header">What I've made</h2>

        <h3>Mobile Apps</h3>
        {apps.map((app, index) => (
          <Program key={index} item={app} />
        ))}
      </section>

      <section>
        <h3>Websites</h3>
        {websites.map((website, index) => (
          <Program key={index} item={website} />
        ))}
      </section>

      <section>
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <Program key={index} item={project} />
        ))}
      </section>
    </section>
  );
}

/* DATA, default rank 10 */
const apps = [
  {
    name: "Diono® Safety Hub",
    cover: safetyHub,
    description: "Designed for busy parents & caregivers, this Safety Hub empowers parents to make confident decisions about car seat safety. With support for offline access, seamless API integrations, and real-time updates, it delivers critical information to parents right when they need it most. With a planned phased rollout, the app aims to balance reliability with innovative features for continuous improvement.",
    languages: [
      "figma",
      "react",
      "expo",
      "nodejs",
      "bigcommerce",
      "zendesk",
      "firebase",
    ],
    links: [],
    year: 2024,
  },
  {
    name: "Panic Pal",
    cover: panicPal,
    description: "Mobile app aiming to provide support for individuals experiencing panic attacks. Using OpenAI-powered chatbot designed to offer empathetic and supportive conversations to help manage panic attacks effectively.",
    languages: [
      "git", 
      "figma", 
      "expo", 
      "react", 
      "nodejs", 
      "firebase", 
      "azure",
    ],
    links: [
      { name: "demo", url: "https://youtu.be/Ueqlpl4Sl4U" },
      { name: "github", url: "https://github.com/kaitrice/panic-pal" },
    ],
    year: 2024,
  },
];

const websites = [
  {
    name: "Water Weather Station",
    cover: wwxs,
    description: "WWXS is an innovative IoT system designed to monitor bodies of water using sensor-equipped buoys. Sensors collect critical environmental data, such as salinity (saltiness), turbidity (cloudiness), temperature, and insolation (sunlight exposure), processed through a PostgreSQL-backed API and displayed on a dynamic Angular web interface visualizing insights across multiple buoys aiding in the assessment of water health.",
    languages: [
      "docker",
      "git",
      "express",
      "postgresql",
      "nodejs",
      "firebase",
      "angular",
      "typescript",
    ],
    links: [
      { name: "demo", url: "https://youtube.com/shorts/_5EAGs0iQbY" },
      { name: "github", url: "https://github.com/GearyER/WWXS" },
    ],
    year: 2023,
  },
  {
    name: "Color Match",
    cover: colorMatch,
    description: "A color-guessing game designed to challenge your perception of color shades. It provides an engaging way to test and improve color recognition skills through intuitive gameplay.",
    languages: [
      "php",
      "javascript",
      "html",
      "css",
    ],
    links: [
      { name: "github", url: "https://github.com/kaitrice/guess-the-color" },
    ],
    year: 2023,
  },
];

const projects = [
  {
    name: "Deadwood",
    cover: deadwood,
    description: `Digital version of the board game 'Deadwood' using a GUI toolkit for Java applications. The project focuses on applying Object-Oriented Design (OOD) principles to create a robust and interactive game environment.`,
    languages: [
      "java",
    ],
    links: [
      { name: "github", url: "https://github.com/kaitrice/deadwood" },
    ],
    year: 2023,
  }
];

