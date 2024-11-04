import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic or redirect to search results page
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Commerce
        </Link>
        <form onSubmit={handleSearchSubmit} className="navbar-search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">Search</button>
        </form>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-item">Home</Link>
          </li>
          <li>
            <Link to="/products" className="navbar-item">Collection</Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-item">Cart</Link>
          </li>
          <li className="navbar-dropdown">
            <Link to="/login" className="navbar-item">Account</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/login" className="dropdown-item">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="dropdown-item">Signup</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
