// Construido con arrow Function
export const CardChildren = ({ title, children }) => (
  <div className="article">
    <h1>{title}</h1>
    <p>{children}</p>

    <div class="article">
      <h1>{title}</h1>
      <p>Lo que sea que le metas dentro...</p>
    </div>
  </div>
);
