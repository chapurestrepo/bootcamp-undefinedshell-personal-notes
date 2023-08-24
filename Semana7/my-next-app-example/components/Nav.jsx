import styles from "@/components/Nav.module.css";

export const Nav = ({children}) => (
  <nav className={styles.nav}>
    <ul>
      {children}
    </ul>
  </nav>
);
