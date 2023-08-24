import styles from '@/components/Card.module.css';

// Construido con arrow Function
export const Card = ({ title, urlImage, category, children }) => (
  <div className={styles.card}>
    <div className={styles["card-cover"]}>
      <div className={styles["card-image"]}>
        <img src={urlImage} alt={title} />
      </div>
      <div className={styles["card-tags"]}>
        <div className={styles["filter-pill"]}>
          <div className={styles["filter-label"]}>{category}</div>
        </div>
      </div>
    </div>
    <div className={styles["card-title"]}>
      <h2>{title}</h2>
    </div>
    <div className={styles["card-description"]}>
      <p>{children}</p>
    </div>
  </div>
);
