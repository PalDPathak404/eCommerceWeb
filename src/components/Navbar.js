import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            eCommerce App
          </NavLink>
        </div>
        <ul className="navbar-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
