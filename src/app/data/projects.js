import "./projects.css";
import Icon from "../components/Icon";
import wwxs from "../../assets/covers/wwxs.png";
import colorMatch from "../../assets/covers/color-match.png";
import deadwood from "../../assets/covers/deadwood.png";
import panicPal from "../../assets/covers/panic-pal.png";
import safetyHub from "../../assets/covers/safety-hub.png";
import { motion } from "motion/react";

/* Default rank 10 */
const data = [
  {
    name: "Diono® Safety Hub",
    rank: 11,
    cover: safetyHub,
    description: `The Safety Hub app is a mobile resource center for parents, offering region-specific car seat safety information and support. Built with React Native and Expo, it features offline access, real-time updates, and integrations with BigCommerce, Zendesk, and Firebase APIs. The app combines user-friendly design with reliable data to empower parents in making informed decisions.`,
    languages: [
      "figma",
      "expo",
      "react",
      "nodejs",
      "firebase",
      // "bigcommerce",
      // "zendesk",
    ],
    links: [],
  },
  {
    name: "Panic Pal",
    rank: 10,
    cover: panicPal,
    description: `Mobile app aiming to provide support for individuals experiencing panic attacks. Using OpenAI-powered chatbot designed to offer empathetic and supportive conversations to help manage panic attacks effectively.`,
    languages: ["git", "figma", "expo", "react", "nodejs", "firebase", "azure"],
    links: [
      { cta: "Watch Demo", url: "https://youtu.be/Ueqlpl4Sl4U" },
      { cta: "Learn More", url: "https://github.com/kaitrice/panic-pal" },
    ],
  },
  {
    name: "Deadwood",
    rank: 9,
    cover: deadwood,
    description: `Digital version of the board game 'Deadwood' using a GUI toolkit for Java applications. The project focuses on applying Object-Oriented Design (OOD) principles to create a robust and interactive game environment.`,
    languages: ["java"],
    links: [{ cta: "Learn More", url: "https://github.com/kaitrice/deadwood" }],
  },
  {
    name: "Color Match",
    rank: 8,
    cover: colorMatch,
    description: `A color-guessing game designed to challenge your perception of color shades. It provides an engaging way to test and improve color recognition skills through intuitive gameplay.`,
    languages: ["javascript", "css", "html5"],
    links: [],
  },
  {
    name: "Water Weather Station",
    rank: 11,
    cover: wwxs,
    description: `Project funded and adopted by America's Navy® 2024. IoT project involving a buoy device for real-time water data collection (salinity, turbidity, temperature, insolation, and soon dissolved oxygen) running on an ESP32 Sparkfun, a mobile app connecting via Bluetooth for data retrieval and uploading via API, and a responsive website visualizing data from multiple buoys aiding in the assessment of water health.`,
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
      { cta: "Watch Demo", url: "https://youtube.com/shorts/_5EAGs0iQbY" },
      { cta: "Learn More", url: "https://github.com/GearyER/WWXS" },
    ],
  },
];

export default function Projects() {
  const projects = data.sort((a, b) => b.rank - a.rank);

  return (
    <div id="projects">
      {projects.map((item, index) => (
        <motion.div 
          key={index} 
          className="project"
          initial={{
            y: 500
          }}
          whileInView={{
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: .8,
            }
          }}
          viewport={{ once: true }}
        >
          <img src={item.cover} alt={`${item.name} project cover`} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="project-langs">
              {item.languages.map((lang, index) => (
                <Icon key={index} name={lang} />
              ))}
            </div>
            <div className="project-links">
              {item.links.map((link, index) => (
                <a
                  key={index}
                  className="link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.cta}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
