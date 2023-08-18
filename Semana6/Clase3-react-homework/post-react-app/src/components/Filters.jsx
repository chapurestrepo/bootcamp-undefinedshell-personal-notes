import "./Filters.css";

export const Filters = ({children}) => (
  <section className="filter-container">
    <h3>Filter actions</h3>
    <div className="filter-content">
      {children}
    </div>
  </section>
);
