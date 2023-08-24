import styles from '@/components/Header.module.css';

export const Header = ({children}) => (<header className={styles.header}>{children}</header>);
