import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import ProjectData from "./models/interfaces/project.interface";
import Contact from "./components/Contact/Contact";

const projectsData: ProjectData[] = [
  {
    title: "börsdata",
    description:
      "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet",
    img: "./tayo.jpg",
    url: "https://github.com/patrikyo/stock-fe",
  },
  {
    title: "tayo",
    description:
      "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet",
    img: "./tayo.jpg",
    url: "https://github.com/patrikyo/elevator",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <section id="about">
        <h2 className={styles.title}>About</h2>
        <About />
      </section>
      <section id="projects">
        <h2 className={styles.title}>Projects</h2>
        <Project projects={projectsData} />
      </section>
      <section id="skills">
        <h2 className={styles.title}>Skills</h2>
        <Skills />
      </section>
      <section id="contact">
        <h2 className={styles.title}>Get in touch</h2>
        <Contact />
      </section>
    </div>
  );
}
