"use client";
import HamburgerMenuProps from "@/app/models/interfaces/hamburgerMenuProps.interface";
import styles from "./HamburgerMenu.module.css";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {/* TOGGLE btn */}
      <button
        className={styles.toggleBtn}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`${styles.icon} ${!isMenuOpen ? styles.iconHidden : ""}`}
        >
          <FontAwesomeIcon icon={faClose} size="3x" color="#ffff" />
        </span>

        <span
          className={`${styles.icon} ${isMenuOpen ? styles.iconHidden : ""}`}
        >
          <FontAwesomeIcon icon={faBars} size="3x" color="#ffff" />
        </span>
      </button>

      {/* NAV list*/}
      <nav>
        <ul
          className={`${styles.listContainer} ${
            isMenuOpen ? styles.textVisible : ""
          }`}
        >
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
      </nav>
    </div>
  );
};

export default HamburgerMenu;
