// src/components/ProductCard.jsx
import React from 'react';
import '../assets/styles/productcard.css'; // optional, create this if needed

function ProductCard(props) {
  const { title, price, image, alt } = props;

  return (
    <article className="product-card">
      <img src={image} alt={alt || title} className="product-image" />
      <h3>{title}</h3>
      <p className="price">ETB {price}</p>
      <button className="buy-button">Buy Now</button>
    </article>
  );
}

export default ProductCard;
