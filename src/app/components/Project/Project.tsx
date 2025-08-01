import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import EmblaCarousel from "../Embla/EmblaCarousel";
import ProjectProps from "@/app/models/interfaces/ProjectProps.interface";
import Link from "next/link";

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((ele) => (
        <article className={styles.projectCard} key={ele.url + ele.title}>
          <h3 className={styles.title}>{ele.title}</h3>
          <p className={styles.description}>{ele.description}</p>
          <div>
            <Link
              href={ele.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${ele.title} in a new tab`}
            >
              <FontAwesomeIcon
                icon={faExternalLink}
                aria-hidden="true"
                className={styles.externalLinkIcon}
              />
              {ele.title}
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <EmblaCarousel images={ele.images} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default Project;
