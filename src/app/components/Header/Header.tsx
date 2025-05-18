import Link from "@/app/models/interfaces/link.interface";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.css";
const Header = () => {
  const links: Link[] = [
    { title: "About me", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.container}>
      <span className={styles.title}>Patrik</span>
      <div className={styles.menuContainer}>
        {/* HamburgerMenu is only shown with small devices */}
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu links={links} />
        </div>
        {/* Desktop menu */}
        <nav className={styles.desktopMenu} aria-label="Main navigation">
          <ul className={styles.listContainer}>
            {links.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
