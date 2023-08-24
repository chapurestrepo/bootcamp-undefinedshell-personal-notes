import styles from '@/components/ListPosts.module.css';

export const ListPosts = ({children }) => (
    <div className={styles["container-posts"]}>
        {children}
    </div>
  );
  