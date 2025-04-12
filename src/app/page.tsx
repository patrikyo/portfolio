import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import ProjectData from "./models/interfaces/project.interface";

const projectsData: ProjectData[] = [
  { title: "börsdata", description: "lorum ipsum", img: "./window.svg" },
  { title: "tayo", description: "lorum ipsum", img: "./window.svg" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <section>
        <h2 className={styles.title}>About</h2>
        <About />
      </section>
      <section>
        <h2 className={styles.title}>Projects</h2>
        <Project projects={projectsData} />
      </section>
      <section>
        <h2 className={styles.title}>Skills</h2>
        <Skills />
      </section>
    </div>
  );
}
