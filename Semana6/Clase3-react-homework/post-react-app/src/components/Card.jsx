import './Card.css';

// Construido con arrow Function
export const Card = ({ title, urlImage, category, children }) => (
  <div class="card">
    <div class="card-cover">
      <div class="card-image">
        <img src={urlImage} alt={title} />
      </div>
      <div class="card-tags">
        <div class="filter-pill">
          <div class="filter-label">{category}</div>
        </div>
      </div>
    </div>
    <div class="card-title">
      <h2>{title}</h2>
    </div>
    <div class="card-description">
      <p>{children}</p>
    </div>
  </div>
);
