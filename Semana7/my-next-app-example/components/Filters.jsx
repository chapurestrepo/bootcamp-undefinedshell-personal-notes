import styles from "@/components/Filters.module.css";

export const Filters = ({children}) => {
  
  return (
  <section className={styles["filter-container"]}>
    <h3>Filter actions</h3>
    <div className={styles["filter-content"]}>
      {children}
    </div>
  </section>
)};
