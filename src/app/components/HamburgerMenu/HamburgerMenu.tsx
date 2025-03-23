"use client";
import HamburgerMenuProps from "@/app/models/interfaces/hamburgerMenuProps.interface";
import styles from "./HamburgerMenu.module.css";
import { useState } from "react";
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      {isMenuOpen && (
        <ul className={styles.listContainer}>
          {links.map((ele, i) => {
            return (
              <li key={i}>
                <a href={ele.href} className={styles.link}>
                  <span className={styles.linkText}>{ele.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default HamburgerMenu;
