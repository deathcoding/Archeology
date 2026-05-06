import { useState } from "react";
import Logo from "@/shared/assets/images/Logo.png";
import { navItems } from "@/widgets/nav-bar/data/nav";
import styles from "./NavBar.module.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarBrand}>
          <span className={styles.logo}><img src={Logo} alt="logo" /></span>
          <span className={styles.navbarLogo}>ООО "АрхеоВектор"</span>
        </div>
        <button
          type="button"
          className={isMenuOpen ? `${styles.navbarToggle} ${styles.navbarToggleActive}` : styles.navbarToggle}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={isMenuOpen ? `${styles.navbarLinks} ${styles.navbarLinksOpen}` : styles.navbarLinks}
        >
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
