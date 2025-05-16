import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import EmblaCarousel from "../Embla/EmblaCarousel";
import ProjectProps from "@/app/models/interfaces/projectProps.interface";

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((ele, i) => (
        <div className={styles.projectCard} key={i}>
          <h3 className={styles.title}>{ele.title}</h3>
          <p className={styles.description}>{ele.description}</p>
          <div className={styles.linkContainer}>
            <FontAwesomeIcon icon={faExternalLink} color="#27ae60" />
            <a href={ele.url} className={styles.link}>
              {ele.title}
            </a>
          </div>
          <div className={styles.imageContainer}>
            <EmblaCarousel images={ele.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
