import "./skills.css";
import Icon from "../components/Icon";

const skills = [ "javascript", "css", "docker", "bootstrap", "git",  "figma", "expo", "express", "html5", "react", "java", "mysql", "postgresql", "nodejs", "firebase", "wordpress", ];

export default function Skills() {
  return (
    <div id="skills">
      {skills.map((skill, index) => (
        <Icon key={index} name={skill} />
      ))}
    </div>
  );
}
