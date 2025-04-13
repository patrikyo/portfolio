import ProjectProps from "@/app/models/interfaces/ProjectProps.interface";
import Image from "next/image";
import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((ele, i) => (
        <div className={styles.projectCard} key={i}>
          <div className={styles.imageContainer}>
            <Image
              src={`/${ele.img}`}
              layout="fill"
              objectFit="cover"
              alt={ele.title}
            />
          </div>
          <h3 className={styles.title}>{ele.title}</h3>
          <p>{ele.description}</p>
          <div className={styles.linkContainer}>
            <FontAwesomeIcon icon={faExternalLink} color="#27ae60" />
            <a href={ele.url} className={styles.link}>
              {ele.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
