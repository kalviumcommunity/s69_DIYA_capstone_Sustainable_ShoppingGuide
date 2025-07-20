import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import Products from './pages/Products';
import StoreLocator from './pages/StoreLocator';
import Community from './pages/Community';
import GreenTips from './pages/GreenTips';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/products" element={<Products />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/community" element={<Community />} />
        <Route path="/green-tips" element={<GreenTips />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
