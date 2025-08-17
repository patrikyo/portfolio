import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.title} aria-label="Sites logo">
        Patrik
      </span>
    </header>
  );
};

export default Header;
