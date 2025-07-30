import React from "react";
import NavigationProps from "@/app/models/interfaces/NavigationProps.interface";
import styles from "./Navigation.module.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Link from "next/link";

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav aria-label="Main navigation">
      <div className={styles.hamburgerMenu}>
        <HamburgerMenu links={links} />
      </div>
      <div className={styles.desktopMenu}>
        <ul className={styles.listContainer}>
          {links.map((link) => (
            <li className={styles.listItem} key={link.href}>
              <Link className={styles.link} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
