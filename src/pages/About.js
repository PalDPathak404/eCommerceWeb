import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>App Description</h2>
          <p>
            This is a mini eCommerce application built with React. It demonstrates
            modern web development practices including React Router for navigation,
            Context API for state management, and integration with external APIs.
          </p>
          <p>
            The application allows users to browse products, filter them by category,
            add items to a shopping cart, and manage their cart items. All cart data
            is persisted in localStorage, ensuring that your shopping cart remains
            intact even after refreshing the page.
          </p>
        </section>

        <section className="about-section">
          <h2>FakeStore API Usage</h2>
          <p>
            This application uses the{' '}
            <a
              href="https://fakestoreapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="api-link"
            >
              FakeStore API
            </a>{' '}
            to fetch product data. The FakeStore API provides a free, open-source
            REST API for testing and prototyping eCommerce applications.
          </p>
          <p>
            <strong>API Endpoint Used:</strong>
          </p>
          <code className="api-endpoint">
            https://fakestoreapi.com/products
          </code>
          <p>
            This endpoint returns a list of products including details such as:
          </p>
          <ul>
            <li>Product ID</li>
            <li>Title</li>
            <li>Price</li>
            <li>Description</li>
            <li>Category</li>
            <li>Product Image URL</li>
            <li>Rating information</li>
          </ul>
          <p>
            The application fetches all products on the Products page and dynamically
            extracts unique categories for filtering. All API calls are handled using
            the native Fetch API with proper error handling and loading states.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Product browsing with image, title, price, and category</li>
            <li>Category-based filtering</li>
            <li>Add products to shopping cart</li>
            <li>View and manage cart items</li>
            <li>Update item quantities</li>
            <li>Remove items from cart</li>
            <li>Persistent cart storage using localStorage</li>
            <li>Dynamic cart count in navigation</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>
          <ul>
            <li>React (Functional Components & Hooks)</li>
            <li>React Router DOM (for navigation)</li>
            <li>Context API (for state management)</li>
            <li>localStorage (for data persistence)</li>
            <li>Fetch API (for HTTP requests)</li>
            <li>CSS3 (for styling)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
