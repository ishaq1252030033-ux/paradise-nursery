import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../CartSlice.jsx';

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8h16l-1.4 12H5.4L4 8Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="wordmark" to="/" aria-label="Paradise Nursery home">
          <span className="brand-icon" aria-hidden="true">✳</span>
          <span>paradise <strong>nursery</strong></span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/plants" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Plants</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link active' : 'nav-link cart-link'}>
            <BagIcon />
            <span>Cart</span>
            <span className="cart-count" aria-label={`${cartCount} items in cart`}>{cartCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
