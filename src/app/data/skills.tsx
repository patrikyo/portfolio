import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faT } from "@fortawesome/free-solid-svg-icons";
import Skill from "../models/interfaces/skill";

const skills: Skill[] = [
  { icon: faT, title: "Typescript" },
  { icon: faJs, title: "Javascript" },
  { icon: faHtml5, title: "HTML5" },
  { icon: faCss3, title: "CSS3" },
  { icon: faReact, title: "React" },
  { icon: faAngular, title: "Angular" },
  { icon: faNode, title: "Node.js" },
  { icon: faCode, title: "WCAG" },
  { icon: faCode, title: "Docker" },
  { icon: faCode, title: "Openshift" },
  { icon: faCode, title: "Next.js" },
  { icon: faCode, title: "MongoDB" },
];

export default skills;
