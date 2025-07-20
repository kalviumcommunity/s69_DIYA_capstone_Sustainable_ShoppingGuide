import TipCard from '../components/TipCard';

export default function GreenTips() {
  return (
    <div className="container">
      <h2>Green Tips</h2>
      <TipCard tip="Carry a cloth bag instead of plastic." />
      <TipCard tip="Use public transport or cycle." />
    </div>
  );
}
