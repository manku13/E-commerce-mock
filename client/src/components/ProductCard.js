import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
