import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.title}>Patrik</span>
      <nav className={styles.nav}>
        <ul className={styles.listContainer}>
          <li>
            <a href="#" className={styles.link}>
              <span className={styles.linkText}>About me</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <span className={styles.linkText}>Services</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <span className={styles.linkText}>Contact me</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
