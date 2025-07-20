import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <div className="container">
      <h2>Welcome to Eco-Friendly Shopping</h2>
      <FeatureCard title="Scan Products" description="Scan barcodes to check eco-friendliness" />
      <FeatureCard title="Find Green Tips" description="Sustainable living ideas" />
      <FeatureCard title="Locate Stores" description="Nearby sustainable product stores" />
    </div>
  );
}
