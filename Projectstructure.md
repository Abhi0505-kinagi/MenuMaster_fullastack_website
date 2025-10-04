# Restaurant Management System

A full-stack restaurant management system with React frontend and Node.js + Express backend, using MongoDB.  
Admin can add, edit, and delete products. Users can view products, add to cart, and generate bills.

---

## Project Structure

root/
- resturantbackend/        # Node.js + Express backend
  - DB/
    - bill.js              # Bill schema and operations
    - db.js                # MongoDB connection
    - Product.js           # Product schema and operations
  - Admin/
    - Admin.js             # Admin routes
  - server.js              # Backend server
  - .env                   # Private credentials
- resturantfront/          # React frontend
  - Components/
    - Admin/
      - addProduct.jsx
      - AdminDashboard.jsx
      - AdminDashboard.css
      - DeleteProduct.jsx
    - Header.jsx
    - Cart.jsx
    - Navigation.jsx
    - Products.jsx
    - TitleCard.css
  - App.jsx                # Main React app
  - index.jsx              # React entry point
  - App.css                # Global styles
- README.md

---

## Features

### Admin
- Add, edit, delete products
- Manage product details (name, price, category, description, image)
- Admin dashboard for easy navigation

### User
- View products with images, price, and description
- Add products to cart (local storage)
- View total price and generate bills

---

## Setup Instructions

### Backend
1. Go to backend folder:
