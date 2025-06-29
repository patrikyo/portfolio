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
        <a
          href="/dummy.pdf"
          className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
          download="patrik_youssef_cv.pdf"
          type="application/pdf"
        >
          <span aria-label="Download Patrik Youssef CV">Download CV</span>
        </a>
        <a href="#contact" className={styles.linkBtn}>
          <span>Contact me</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
