import React from 'react';
import './Styles/CollectionCard.css';

const CollectionCard = ({ item }) => {
  return (
    <div className="collection-card">
      <img src={item.image} alt={item.name} className="collection-image" />
      <h2 className="collection-name">{item.name}</h2>
      <p className="collection-description">{item.description}</p>
      <p className="collection-price">${item.price}</p>
      <button className="collection-button">Add to Cart</button>
    </div>
  );
};

export default CollectionCard;
