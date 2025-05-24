import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import SkillProps from "@/app/models/interfaces/SkillsProps.interface";

const Skills: React.FC<SkillProps> = ({ skills }) => (
  <div className={styles.container}>
    <ul className={styles.list} aria-label="Skills">
      {skills.map((ele, idx) => (
        <li className={styles.listItem} key={ele.title + idx}>
          <figure className={styles.figureContainer}>
            <FontAwesomeIcon
              icon={ele.icon}
              color="#27AE60"
              size="4x"
              aria-hidden="true"
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

export default Skills;
