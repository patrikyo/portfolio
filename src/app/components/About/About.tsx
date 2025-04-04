import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";

const About = () => {
  const personalInfo = [
    { label: "Full Name", value: "Patrik Youssef", icon: faUser },
    {
      label: "Email Adress",
      value: "patrikyoussef@gmail.com",
      icon: faEnvelope,
    },
    { label: "Linkedin", value: "Lorum ipsum", icon: faLinkedin },
    { label: "phone", value: "0739165824", icon: faMobile },
  ];
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <ul className={styles.list}>
        {personalInfo.map((ele, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={ele.icon} color="#27AE60" size="lg" />
            <span className={styles.listItemLabel}>{ele.label}</span>
            <span>{ele.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
