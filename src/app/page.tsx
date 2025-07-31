import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import personalInfo from "./data/personalInfo";
import projectsData from "./data/projectsData";
import skills from "./data/skills";
import Navigation from "./components/Navigation/Navigation";
import Link from "./models/interfaces/Link.interface";

export default function Home() {
  const links: Link[] = [
    { title: "About me", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];
  return (
    <>
      <div className={styles.headerContainer}>
        <Header />
        <Navigation links={links} />
      </div>
      <div className={styles.container}>
        <HeroSection />
        <section id="about">
          <h2 className={styles.title}>About</h2>
          <About personalInfo={personalInfo} />
        </section>
        <section id="projects">
          <h2 className={styles.title}>Projects</h2>
          <Project projects={projectsData} />
        </section>
        <section id="skills">
          <h2 className={styles.title}>Skills</h2>
          <Skills skills={skills} />
        </section>
        <section id="contact">
          <h2 className={styles.title}>Get in touch</h2>
          <Contact />
        </section>
      </div>
    </>
  );
}
