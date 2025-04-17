import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faT } from "@fortawesome/free-solid-svg-icons";

import styles from "./Skills.module.css";

const skills = [
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
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {skills.map((ele) => (
          <li className={styles.listItem} key={ele.title}>
            <figure className={styles.figureContainer}>
              <FontAwesomeIcon
                icon={ele.icon}
                color="#27AE60"
                size="4x"
                aria-label={ele.title}
              />
              <figcaption className={styles.listItemTitle}>
                {ele.title}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
