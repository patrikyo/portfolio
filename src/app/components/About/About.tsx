import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";
import PersonalInfoItem from "@/app/models/personalInfoItem";

const About = () => {
  const personalInfo: PersonalInfoItem[] = [
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
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <dl className={styles.infoList}>
        {personalInfo.map((ele) => (
          <li key={ele.label} className={styles.infoItem}>
            <FontAwesomeIcon
              icon={ele.icon}
              color="#27AE60"
              size="lg"
              aria-hidden="true"
            />
            <div className={styles.infoContent}>
              <dt className="font-bold m-0">{ele.label}</dt>
              <dd className="m-0">{ele.value}</dd>
            </div>
          </li>
        ))}
      </dl>
    </section>
  );
};

export default About;
