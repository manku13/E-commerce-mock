import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Here you would normally handle cart logic
    setTimeout(() => setAddedToCart(false), 3000); // Reset after 3 seconds
  };

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {addedToCart && <p className="confirmation-message">Added to Cart!</p>}
    </div>
  );
}

export default ProductDetailPage;
