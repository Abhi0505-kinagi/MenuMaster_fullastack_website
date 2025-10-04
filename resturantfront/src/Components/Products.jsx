import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

 const addToCart = (product) => {
  // Get existing cart, make sure it's an array
  let cart = [];

  try {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(storedCart)) {
      cart = storedCart;
    }
  } catch (err) {
    // If parsing fails, start with empty array
    cart = [];
  }

  // Add the new product
  cart.push(product);

  // Save updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`✅ ${product.name} added to cart!`);
};


  return (
    <div className="product-container">
      {products.map((p) => (
        <div className="pcard" key={p._id}>
          <img className="product-image" src={p.image} alt={p.name} />
          <h3 className="product-name">{p.name}</h3>
          <div className="product-detail">
            <h1 className="product-price">₹{p.price}</h1>
            <p className="product-desp">{p.description}</p>
            <button className="adtocart" onClick={() => addToCart(p)}>Add to Cart</button>
            <p className="product-cat">{p.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
