import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/admin/products",{ ...formData,username: "abhi",     // <-- your admin username
        password: "585301"});
      setMessage("✅ Product added successfully!");
      setFormData({ name: "", price: "", description: "", category: "", image: "" });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to add product.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "price", "description", "category", "image"].map((field) => (
          <input 
            key={field}
            type={field === "price" ? "number" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="inputfileds"
            required
          />
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default AddProduct;
