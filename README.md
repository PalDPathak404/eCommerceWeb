# Mini eCommerce App

A mini eCommerce application built with React, using the FakeStore API for product data.

## Features

- **Product Browsing**: View products with images, titles, prices, and categories
- **Category Filtering**: Filter products by category using a dropdown
- **Shopping Cart**: Add products to cart, update quantities, and remove items
- **Persistent Cart**: Cart data is saved to localStorage and persists across page refreshes
- **Dynamic Cart Count**: Navbar displays the total number of items in the cart
- **Responsive Design**: Works on both desktop and mobile devices

## Technologies Used

- React (Functional Components & Hooks)
- React Router DOM
- Context API
- localStorage
- Fetch API
- CSS3

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   └── Navbar.css
├── context/
│   └── CartContext.js
├── pages/
│   ├── Products.js
│   ├── Products.css
│   ├── Cart.js
│   ├── Cart.css
│   ├── About.js
│   └── About.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Routes

- `/` - Products page (default)
- `/cart` - Shopping cart page
- `/about` - About page with app information

## API

This app uses the [FakeStore API](https://fakestoreapi.com) to fetch product data.

API Endpoint: `https://fakestoreapi.com/products`
