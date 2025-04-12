import ProjectProps from "@/app/models/interfaces/ProjectProps.interface";
import Image from "next/image";
import styles from "./Project.module.css";
const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((ele, i) => (
        <div className={styles.projectCard} key={i}>
          <div className={styles.imageContainer}>
            <Image
              src={ele.img}
              layout="fill"
              objectFit="cover"
              alt={ele.title}
            />
          </div>
          <h3 className={styles.title}>{ele.title}</h3>
          <p>{ele.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
