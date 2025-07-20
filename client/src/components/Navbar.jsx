import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">EcoShop</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/products">Products</Link>
        <Link to="/store-locator">Store Locator</Link>
        <Link to="/community">Community</Link>
        <Link to="/green-tips">Green Tips</Link>
      </div>
    </nav>
  );
}
