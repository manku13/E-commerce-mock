import React, { useEffect, useState } from 'react';
import './Styles/Collection.css';
import CollectionCard from '../components/CollectionCard';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/collections`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const filteredCollections = collections.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCollections = filteredCollections.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    }
    return b.price - a.price;
  });

  if (loading) return <div className="loading">Loading collections...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="collection-page">
      <h1 className="collection-title">Collections</h1>
      <input
        type="text"
        placeholder="Search collections..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="sort-options">
        <label htmlFor="sort">Sort by Price: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="collection-grid">
        {sortedCollections.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
