const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../DB/Product");
require("dotenv").config();

// ----------------- Admin Auth Middleware -----------------
const adminAuth = (req, res, next) => {
  const { username, password } = req.body; // from POST/PUT/DELETE
  if (username === process.env.USER && password === process.env.PASSWORD) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// ----------------- Product CRUD -----------------

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add Product
router.post("/products", adminAuth, async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const newProduct = new Product({ name, description, price, image, category });
    await newProduct.save();
    res.status(201).json({ message: `Product '${name}' added successfully` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Product by Name
router.put("/products/:name", adminAuth, async (req, res) => {
  const name = decodeURIComponent(req.params.name.trim());
  try {
    const updatedProduct = await Product.findOneAndUpdate({ name }, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
    res.json({ message: `Product '${name}' updated successfully`, product: updatedProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Product by Name
router.delete("/products/:name", adminAuth, async (req, res) => {
  const name = decodeURIComponent(req.params.name.trim());
  try {
    const deletedProduct = await Product.findOneAndDelete({ name });
    if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
    res.json({ message: `Product '${name}' deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
