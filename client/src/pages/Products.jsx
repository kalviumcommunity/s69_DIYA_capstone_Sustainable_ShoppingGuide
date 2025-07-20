import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <div className="container">
      <h2>Eco-Friendly Products</h2>
      <ProductCard name="Bamboo Brush" brand="EcoLife" rating="4.5" />
      <ProductCard name="Reusable Bottle" brand="GreenMate" rating="4.7" />
    </div>
  );
}
