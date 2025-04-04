import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}
