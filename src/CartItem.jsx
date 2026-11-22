import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from './CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => window.alert('Checkout is coming soon! Thank you for visiting Paradise Nursery.');

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p className="eyebrow">YOUR LITTLE GREEN COLLECTION</p>
        <h1>Shopping <em>cart.</em></h1>
        <p>{cartCount} {cartCount === 1 ? 'plant' : 'plants'} in your cart</p>
      </div>
      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon" aria-hidden="true">♧</div>
          <h2>Your cart is waiting to bloom.</h2>
          <p>Find the perfect plant to brighten your space.</p>
          <Link to="/plants" className="button button-primary">Explore plants <span aria-hidden="true">→</span></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Items in your cart">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={`${item.name} houseplant illustration`} className="cart-item-image" />
                <div className="cart-item-description">
                  <p className="cart-item-category">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p className="cart-unit-price">Unit price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-control" aria-label={`Quantity of ${item.name}`}>
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                  <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
              </article>
            ))}
            <Link to="/plants" className="continue-shopping">← Continue shopping</Link>
          </section>
          <aside className="order-card" aria-label="Order summary">
            <p className="eyebrow">YOUR ORDER</p>
            <h2>Order summary</h2>
            <div className="summary-row"><span>Items ({cartCount})</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>Calculated later</span></div>
            <div className="summary-total"><span>Total amount</span><strong>${cartTotal.toFixed(2)}</strong></div>
            <button type="button" className="button button-primary checkout-button" onClick={handleCheckout}>Checkout <span aria-hidden="true">→</span></button>
            <p className="checkout-note">Checkout is a demo feature. No payment will be processed.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
