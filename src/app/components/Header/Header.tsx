import Link from "@/app/models/interfaces/link.interface";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.css";
const Header = () => {
  const links: Link[] = [
    { title: "About me", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact me", href: "#" },
  ];

  return (
    <header className={styles.container}>
      <span className={styles.title}>Patrik</span>
      <HamburgerMenu links={links} />
    </header>
  );
};

export default Header;
