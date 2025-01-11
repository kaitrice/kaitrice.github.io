import "./Icon.css";

import javascript from "../../assets/icons/icons8-javascript.svg";
import bootstrap from "../../assets/icons/icons8-bootstrap-2.svg";
import css from "../../assets/icons/icons8-css.svg";
import docker from "../../assets/icons/icons8-docker.svg";
import git from "../../assets/icons/icons8-git.svg";
import figma from "../../assets/icons/icons8-figma.svg";
import expo from "../../assets/icons/icons8-expo.svg";
import express from "../../assets/icons/icons8-express-js.svg";
import html5 from "../../assets/icons/icons8-html5.svg";
import reactLogo from "../../assets/icons/react.svg";
import java from "../../assets/icons/icons8-java.svg";
import mysql from "../../assets/icons/icons8-mysql-logo.svg";
import postgresql from "../../assets/icons/icons8-postgresql.svg";
import nodejs from "../../assets/icons/icons8-nodejs.svg";
import firebase from "../../assets/icons/icons8-google-firebase-console.svg";
import wordpress from "../../assets/icons/icons8-wordpress.svg";
import azure from "../../assets/icons/icons8-azure.svg";
import bc from "../../assets/icons/icons8-bigcommerce.svg";
import typescript from "../../assets/icons/icons8-typescript.svg";
import angular from "../../assets/icons/icons8-angularjs.svg";
import zendesk from "../../assets/icons/icons8-zendesk.svg";
import linkedin from "../../assets/icons/icons8-linkedin.svg";
import github from "../../assets/icons/icons8-github.svg";
import open from "../../assets/icons/up-right-from-square-solid.svg"
import php from "../../assets/icons/php-logo-svgrepo-com.svg"
import postman from "../../assets/icons/postman-icon-svgrepo-com.svg"

const data = [
  { name: "javascript", icon: javascript },
  { name: "css", icon: css },
  { name: "docker", icon: docker },
  { name: "bootstrap", icon: bootstrap },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "expo", icon: expo },
  { name: "express", icon: express },
  { name: "html", icon: html5 },
  { name: "react", icon: reactLogo },
  { name: "java", icon: java },
  { name: "mysql", icon: mysql },
  { name: "postgresql", icon: postgresql },
  { name: "nodejs", icon: nodejs },
  { name: "firebase", icon: firebase },
  { name: "wordpress", icon: wordpress },
  { name: "azure", icon: azure },
  { name: "bigcommerce", icon: bc },
  { name: "typescript", icon: typescript },
  { name: "angular", icon: angular },
  { name: "zendesk", icon: zendesk },
  { name: "linkedin", icon: linkedin },
  { name: "github", icon: github },
  { name: "open", icon: open },
  { name: "php", icon: php },
  { name: "postman", icon: postman },
];

export default function Icon({ name, text }) {
  const item = data.find((item) => item.name === name);

  if (!item) {
    return <div className="icon">Icon not found</div>;
  }
  return (
    <div className="icon">
      <img src={item.icon} alt={`${item.name} logo`} />
      { text && <p>{item.name}</p> }
    </div>
  );
}
