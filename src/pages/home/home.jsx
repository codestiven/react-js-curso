import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </nav>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple example of a home component.</p>
    </div>
  );
};

export default Home;

