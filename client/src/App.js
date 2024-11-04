import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
// import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
// import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          {/* <Route path="/products" element={<ProductListPage />} /> */}
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
