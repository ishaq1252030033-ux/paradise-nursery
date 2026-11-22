import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

function Home() {
  return (
    <main>
      <section className="hero" aria-label="Paradise Nursery landing page">
        <div className="hero-content">
          <p className="hero-kicker">GROW MORE. WORRY LESS.</p>
          <h1>Bring nature<br /><em>home.</em></h1>
          <p>Beautiful plants, brighter rooms, happier days. Welcome to your little corner of paradise.</p>
          <Link to="/plants" className="button button-primary hero-cta">Get Started <span aria-hidden="true">→</span></Link>
          <div className="hero-caption">Thoughtfully chosen plants for every space.</div>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">✳ paradise <strong>nursery</strong></div>
        <p>Plant a little happiness, every day.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery · Demo project</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
