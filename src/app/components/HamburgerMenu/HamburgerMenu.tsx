"use client";
import HamburgerMenuProps from "@/app/models/interfaces/HamburgerMenuProps.interface";
import styles from "./HamburgerMenu.module.css";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* TOGGLE BUTTON */}
      <button
        className={styles.toggleBtn}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-controls="menu-list"
      >
        <span
          className={`${styles.icon} ${!isMenuOpen ? styles.iconHidden : ""}`}
        >
          <FontAwesomeIcon
            icon={faClose}
            size="3x"
            color="#fff"
            aria-hidden="true"
          />
        </span>
        <span
          className={`${styles.icon} ${isMenuOpen ? styles.iconHidden : ""}`}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            color="#fff"
            aria-hidden="true"
          />
        </span>
      </button>

      {/* NAVIGATION LIST */}
      <nav id="menu-list" hidden={!isMenuOpen}>
        <ul
          className={`${styles.listContainer} ${
            isMenuOpen ? styles.textVisible : ""
          }`}
        >
          {links.map((ele) => (
            <li key={ele.href} className={styles.listItem}>
              <a
                href={ele.href}
                className={styles.link}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className={styles.linkText}>{ele.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
