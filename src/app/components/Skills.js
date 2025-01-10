import "./Skills.css";
import Icon from "./Icon";

const skills = [ "javascript", "css", "docker", "bootstrap", "git",  "figma", "expo", "express", "html", "react", "java", "mysql", "postgresql", "php", "postman", "nodejs", "firebase", "wordpress", ];

export default function Skills() {
  return (
    <div id="skills">
      {skills.map((skill, index) => (
        <Icon key={index} name={skill} text={true} />
      ))}
    </div>
  );
}
