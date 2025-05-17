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
        {/* Desktop menu*/}
        <div className={styles.desktopMenu}>
          <nav>
            <ul className={styles.listContainer}>
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <a className={styles.link} href={link.href}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
