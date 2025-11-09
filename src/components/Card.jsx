// src/components/Card.jsx
function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Card;