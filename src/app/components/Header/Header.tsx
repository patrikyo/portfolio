import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.title}>Patrik</span>
      <nav className={styles.nav}>
        <ul className={styles.listContainer}>
          <li>
            <a href="#" className={styles.link}>
              About me
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
