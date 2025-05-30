import React from "react";
import Link from "@/app/models/interfaces/Link.interface";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const links: Link[] = [
    { title: "About me", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.container}>
      <span className={styles.title} aria-label="Sites logo">
        Patrik
      </span>
      <div className={styles.menuContainer}>
        {/* HamburgerMenu is only shown with small devices */}
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu links={links} />
        </div>
        {/* Desktop menu */}
        <nav className={styles.desktopMenu} aria-label="Main navigation">
          <Navigation links={links} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
