import styles from "./HeroSection.module.css";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/patrik.png"
        height={250}
        width={250}
        alt="Portrait of Patrik Youssef, a frontend developer"
        className={styles.image}
      />
      <span className={styles.name}>Hi, I am Patrik Youssef</span>
      <span className={styles.title}>Frontend Developer</span>
      <div className={styles.btnContainer}>
        <button className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
          <span>Download CV</span>
        </button>
        <button type="button" className={styles.ctaBtn}>
          <span>Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
