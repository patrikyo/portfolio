import React from "react";
import NavigationProps from "@/app/models/interfaces/NavigationProps.interface";
import styles from "./Navigation.module.css";

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <>
      <ul className={styles.listContainer}>
        {links.map((link) => (
          <li key={link.href}>
            <a className={styles.link} href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
