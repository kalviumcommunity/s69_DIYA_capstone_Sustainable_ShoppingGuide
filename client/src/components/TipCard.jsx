import './Card.css';

export default function TipCard({ tip }) {
  return (
    <div className="card">
      <p>{tip}</p>
    </div>
  );
}
