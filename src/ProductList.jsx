import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import { categories } from './data/plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const inCart = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog-page">
      <section className="page-intro">
        <p className="eyebrow">THE PLANT EDIT</p>
        <h1>Find your new <em>favorite green.</em></h1>
        <p>Browse 18 unique houseplants across three collections. A happier space starts here.</p>
      </section>
      {categories.map((category) => (
        <section key={category.slug} className="catalog-section" aria-labelledby={`category-${category.slug}`}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2 id={`category-${category.slug}`}>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <span className="section-count">06 plants</span>
          </div>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const alreadyAdded = inCart.has(plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-image-wrap">
                    <img className="product-image" src={plant.image} alt={`${plant.name} houseplant illustration`} loading="lazy" />
                    <span className="product-label">Indoor plant</span>
                  </div>
                  <div className="product-content">
                    <div className="product-title-row">
                      <h3>{plant.name}</h3>
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                    </div>
                    <p>{plant.description}</p>
                    <button
                      className={alreadyAdded ? 'button button-added' : 'button button-add'}
                      type="button"
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addItem({ ...plant, category: category.title }))}
                      aria-label={`${alreadyAdded ? 'Added' : 'Add'} ${plant.name} ${alreadyAdded ? 'to' : 'to'} cart`}
                    >
                      <span aria-hidden="true">{alreadyAdded ? '✓' : '+'}</span>
                      {alreadyAdded ? 'Added to cart' : 'Add to cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
