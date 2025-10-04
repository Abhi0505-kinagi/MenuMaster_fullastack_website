import React, { useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [deleteName, setDeleteName] = useState(""); // <-- rename to deleteName
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${deleteName}"?`)) return;

    try {
      // Use proper backend route and send admin credentials in body
      await axios.delete(
        `http://localhost:4000/admin/products/${encodeURIComponent(deleteName)}`,
        { data: { username: "abhi", password: "585301" } } 
      );

      setMessage(`🗑️ Product "${deleteName}" deleted successfully!`);
      setDeleteName(""); // clear input
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to delete product.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        Delete Product
      </h2>

      <input
        type="text"
        placeholder="Enter Product Name"
        value={deleteName}
        onChange={(e) => setDeleteName(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 mb-4"
      />

      <button
        onClick={handleDelete}
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
      >
        Delete Product
      </button>

      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default DeleteProduct;
