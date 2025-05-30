import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";
import AboutProps from "@/app/models/interfaces/AboutProps.interface";
import React from "react";

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <div className={styles.container}>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <ul
        className={styles.infoList}
        role="list"
        aria-label="Personal information"
      >
        {personalInfo.map((ele) => (
          <li key={ele.label + ele.value} className={styles.infoItem}>
            <FontAwesomeIcon
              icon={ele.icon}
              color="#27AE60"
              size="lg"
              aria-hidden="true"
            />
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>{ele.label}</span>
              <span className={styles.infoValue}>{ele.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
