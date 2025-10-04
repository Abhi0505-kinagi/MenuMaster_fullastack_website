require("dotenv").config();
const express = require("express");
const database = require("./DB/db");
const Product = require("./DB/Product");
const Bill = require("./DB/bill");
const cors = require("cors");

// Import admin routes // <-- must match file path

const app = express();
app.use(express.json());
const adminRoutes = require("./Admin/admin");
app.use(cors({ origin: "http://localhost:5173" })); // React dev server

// Home route
app.get("/", (req, res) => res.send("🏨 Hotel Management System"));

// Public routes
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/bills", async (req, res) => {
  const bills = await Bill.find();
  res.json(bills);
});

// Admin routes (all CRUD operations)
app.use("/admin", adminRoutes); // <-- All routes in admin.js prefixed with /admin

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
