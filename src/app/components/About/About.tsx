import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";
import AboutProps from "@/app/models/interfaces/aboutProps.interface";

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <div className={styles.container}>
      <p className={styles.aboutText}>
        A frontend developer with a holistic view of system development. With a
        masters degree in Computer and Systems Sciences from Stockholm
        University and over seven years of experience as a frontend developer at
        the Swedish Public Employment Service, I have a unique ability to see
        the bigger picture. Im passionate about creating user-centered and
        accessible web applications that are not only technically sound but also
        provide an excellent user experience. My background as a systems
        developer allows me to look beyond the code and understand how frontend,
        backend, and user experience are interconnected. Ive played an active
        role in the entire development lifecycle, from requirements analysis and
        UX design to implementation and testing.
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
