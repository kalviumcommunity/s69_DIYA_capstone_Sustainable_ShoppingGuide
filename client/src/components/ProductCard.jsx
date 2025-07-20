import './Card.css';

export default function ProductCard({ name, brand, rating }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Brand: {brand}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
