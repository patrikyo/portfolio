import NavigationProps from "@/app/models/interfaces/navigationProps.interface";
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
