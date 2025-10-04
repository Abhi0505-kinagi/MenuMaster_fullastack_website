# Hotel/Restaurant Management System

This is a full-stack web application for managing a hotel or restaurant menu. Users can view products (like food items), and admins can add, edit, or delete products. Cart functionality and local storage support are included for ordering purposes.

---

## Features

### User Features
- View all products with images, description, price, and category.
- Add products to a cart stored in local storage.
- View cart with total price.
- Remove individual items from the cart.

### Admin Features
- Admin dashboard for managing products.
- Add new products (name, price, description, category, image URL).
- Delete existing products.
- (Optional) Edit products in future updates.
- Admin authentication for secure operations.

---

## 🛠 Technology Stack

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **State Management:** React `useState` and local storage for cart
- **HTTP Client:** Axios

---
## Project Structure
  root/
├─ resturantbackend/ # Node.js + Express backend
│ ├─ DB/ # MongoDB models
│ │ ├─ bill.js # Bill schema and operations
│ │ ├─ db.js # Main MongoDB connection
│ │ └─ Product.js # Product schema and operations
│ ├─ Admin/
│ │ └─ Admin.js # Admin routes
│ ├─ server.js # Backend server
│ └─ .env # For storing private credentials
├─ resturantfront/ # React frontend
│ ├─ Components/
│ │ ├─ Admin/ # Admin control components
│ │ │ ├─ addProduct.jsx
│ │ │ ├─ AdminDashboard.jsx
│ │ │ ├─ AdminDashboard.css
│ │ │ └─ DeleteProduct.jsx
│ │ ├─ Header.jsx
│ │ ├─ Cart.jsx
│ │ ├─ Navigation.jsx
│ │ ├─ Products.jsx
│ │ └─ TitleCard.css
│ ├─ App.jsx # Main React App
│ ├─ index.jsx # React entry point
│ └─ App.css # Global styles
└─ README.md
## 💻 Installation

1. **Clone the repository**

```bash
https://github.com/Abhi0505-kinagi/MenuMaster_fullastack_website.git


